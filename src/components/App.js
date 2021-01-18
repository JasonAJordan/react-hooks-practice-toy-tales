import React, { useState, useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] =useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
      fetch('http://localhost:3001/toys')
      .then(r => r.json())
      .then(resp => setToys(resp))
  }, [])

  function newToy(toyData) {
    //console.log("asd")
    fetch('http://localhost:3001/toys',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toyData),
    })
    .then(response => response.json())
    .then(response => setToys([...toys, response]))
    
  }

  function deleteToy(toyObj){
    //console.log(toyObj)
    fetch(`http://localhost:3001/toys/${toyObj.id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      const updatedToys = toys.filter((toy) => toy.id !== toyObj.id);
      setToys(updatedToys)
    })
  }


  function updateToyLikes(toyObj){
    //console.log(toyObj, data)

    // fetch(`http://localhost:3001/toys/${toyObj.id}`,{
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(r => r.json())
    // .then(() => {
      const updatedToys = toys.map((toy) => 
        toy.id === toyObj.id ? toyObj : toy
      );
      setToys(updatedToys)
    // })

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm newToy={newToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} 
      deleteToy={deleteToy} 
      updateToyLikes={updateToyLikes}/>
    </>
  );
}

export default App;
