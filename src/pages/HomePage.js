import React from "react";
import { db } from "../App";

const HomePage = ({ onPageChange }) => {
  
  return (
    <section className="box wrap-S">
      <div>This is the home page.</div>
      <h1 className="title">問答系統</h1>
      <input text="房間ID："/>
      <div style={{margin: "0 auto", width: "250px"}}>
        <button className="btn btn-XL marginV-XS btn-radius-L" link="/lecturer">問問題</button>
        <button className="btn btn-XL marginV-XS btn-radius-L" link="/attendee">答答題</button>
      </div>
      
      <button onClick={() => onPageChange("lecturer")}>lecturer</button>
      <button onClick={() => onPageChange("attendee")}>attendee</button>
      <button
        onClick={() =>
          console.log(11)
        }
        >
      chartroom
      </button>
    </section>
  );
};

export default HomePage;
