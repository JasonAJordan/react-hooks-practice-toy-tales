import React from "react";

function ToyCard({toy, deleteToy, updateToyLikes}) {

  function handleDelete(event){
    deleteToy(toy)
  }

  function handleLike(event){
    const data = {likes: toy.likes + 1}
    //const id = toy.id
    //updateToyLikes(toy, data);


    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(r => r.json())
    .then(() => { 
      updateToyLikes(toy)
    })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
