import React, {useState} from "react";

function ToyForm({newToy}) {

  const [toyData, setToyData] = useState({
    name: "",
    image: "",
    likes: 0,
  })

  function handleChange(event){
    //console.log(event.target.value)
    setToyData({
      ...toyData, 
      [event.target.name]: event.target.value
    })
  }

  function handleNewToy(event){
    event.preventDefault();
    newToy(toyData);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"

          onChange={handleChange}
          value={toyData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"

          onChange={handleChange}
          value={toyData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form >
    </div>
  );
}

export default ToyForm;
