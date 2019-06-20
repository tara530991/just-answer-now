import React, { useState, useEffect } from "react";
import { db } from "../App.js";
import "../css/table.css";

const LecturerPage = ({ onPageChange, roomId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(1111111)
    db.collection("rooms")
      .doc("123")
      .collection("answers")
      .onSnapshot(snapshot => {
        // snapshot.docChanges
        // let rows = [];
        setData(snapshot.docs.map(doc => doc.data()));

        // snapshot.docs.map(doc => {
        //   console.log(doc.data())
        //   // console.log(rows)

        // })
      });
  }, []);

  const renderRows = () => {
    const rows = data.map((ans, idx) => {
      return (
        <tr key={idx}>
          <td>{ans.name}</td>
          <td>{ans.answer}</td>
        </tr>
      );
    });
    return rows;
  };

  return (
    <section className="box wrap-XS">
      <h2 className="title">看結果 {roomId}</h2>
      <table>
        <tbody>
          <tr>
            <th>名字</th>
            <th>回答內容</th>
          </tr>
          {renderRows()}
        </tbody>
      </table>

      <button
        onClick={() => {
          onPageChange("home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          onPageChange("attendee");
        }}
      >
        Attendee
      </button>

      <button
        onClick={() =>
          db
            .collection("rooms")
            .add({ name: "XXXX" })
            .then(snapshot => console.log(snapshot))
        }
      >
        Open Room(ADD)
      </button>

      <button
        onClick={() =>
          db
            .collection("rooms")
            .doc("Test")
            .set({ foo: 1 })
            .then(snapshot => console.log(snapshot))
            .catch(error => console.log(error))
        }
      >
        Try(Update)
      </button>

      <button
        onClick={() =>
          db
            .collection("rooms")
            .where("name", "==", "xxx")
            .onSnapshot(snapshot => {
              snapshot.docs.map(doc => {
                doc.exist();
                doc.data();
              });
            })
        }
      >
        .Map
      </button>
    </section>
  );
};

export default LecturerPage;
