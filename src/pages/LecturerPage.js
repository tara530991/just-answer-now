import React from "react";
import { db } from "../App.js";

const LecturerPage = ({onPageChange}) => {


  // db.collection("rooms").where("name","==","xxx").onSnapshot(snapshot => { snapshot.docChanges });
  return (
  <div>
    <div>This is the lecturer page.</div>
    <button onClick={ () =>
    { onPageChange("home") } } >Home</button>
    <button onClick={ () => 
    { onPageChange("attendee") } } >Attendee</button>
    <button onClick={ () => 
      db.collection("rooms").add({ name:"XXXX" })
      .then( snapshot => console.log( snapshot ) ) } >Open Room(ADD)</button>

    <button onClick={ () =>   
      db.collection("rooms").doc("Test").set({foo:1})
      .then(snapshot => console.log( snapshot ))
      .catch( error => console.log( error ) ) } >Try(Update)</button>

    <button onClick={ () =>   
      db.collection("rooms").where("name","==","xxx")
        .onSnapshot( snapshot =>
          { snapshot.docs.map( doc =>
            { doc.exist()
              doc.data() } ) } ) } >.Map</button>
  </div>
  );
};

export default LecturerPage;
