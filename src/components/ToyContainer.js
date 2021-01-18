import React from "react";
import ToyCard from "./ToyCard";
import ToyForm from "./ToyForm";

function ToyContainer({toys, deleteToy, updateToyLikes }) {

  //console.log(toys)
  const toysMapped = toys.map((toy) => (
    <ToyCard 
    key={toy.id}
    toy={toy}
    deleteToy={deleteToy}
    updateToyLikes={updateToyLikes}
    />
  ))

  // console.log(toysMapped)
  return (
    <div id="toy-collection">{toysMapped}</div>
  );
}

export default ToyContainer;
