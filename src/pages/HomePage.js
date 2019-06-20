import React, {useState} from "react";
import { db } from "../App";

const HomePage = ({ onPageChange, onRoomIdChange }) => {
  const [roomId, setRoomId] = useState("");

  return (
    <section className="box wrap-S">
      <h1 className="title">只能回答的系統</h1>
      <div style={{margin: "30px auto", width: "250px"}}>
        房間ID：
        <input onChange={(e) => {setRoomId(e.currentTarget.value)}}/>
      </div>
      <div style={{margin: "0 auto", width: "250px"}}>
        <button 
          className="btn btn-XL marginV-XS btn-radius-L" 
          onClick={() => {
            onPageChange("lecturer")
            onRoomIdChange(roomId)
            }}
            >看結果
            </button>
        <button 
          className="btn btn-XL marginV-XS btn-radius-L"
          onClick={() => onPageChange("attendee")}
          >答答題</button>
      </div>
    </section>
  )
}

export default HomePage