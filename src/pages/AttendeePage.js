import React from "react";
import { db } from "../App";

const AttendeePage = ({onPageChange}) => {

  db.collection('rooms').add({
    name: "Linda"
  })
  

  // db.collection('rooms')
  // .where('name','==','Linda')
  // .onSnapshot(snapshot => {
  //   snapshot.docs.map(doc => {
  //     doc.exists()
  //     doc.data()
  //   })
  // })
  //db.collection('rooms').doc('').collection()

  return (
    <div>
    <div>this is AttendeePage.</div>

    <button onClick={
      ()=>db.collection('rooms').doc('678').set({
        name: 'black'
      })
      .then(() => {

      })
      .catch(err => {
        console.log(err)
      })
    }>
    Go Home
    </button>
    <button onClick={
      ()=>onPageChange("lecturer")
    }>
      Go lecturer
      </button>
    </div>
  );
  
};

export default AttendeePage;
