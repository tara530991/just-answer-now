
import React, {useState} from "react";
import { db } from "../App";

const AttendeePage = ({ onPageChange }) => {
  const roomID = "123";
  const [name, setName] = useState("");
  const [ans, setAns] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    db.collection("rooms")
      .doc(roomID)
      .collection("answers")
      .add({
        name,
        answer:ans
      }).then(()=> alert("success")).catch(()=> alert("Failed"));
  }
  const handleNameChange = e => {
    setName(e.currentTarget.value);
    console.log("123");
  };

  const handleAnsChange = (e) => {
    setAns(e.currentTarget.value);
  };
  return (
    <div>
      <div style={{margin:"auto", width:"300px",textAlign:"center"}}>this is AttendeePage.</div>
      <div style={{margin:"auto", width:"300px",textAlign:"center",fontSize:"30px",fontWeight:"400"}}>RoomID</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>回答區</div>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="你的姓名"
          />
          <input
            type="text"
            onChange={handleAnsChange}
            placeholder="你的回答"
          />
        </div>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AttendeePage;
