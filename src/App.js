import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LecturerPage from "./pages/LecturerPage";
import AttendeePage from "./pages/AttendeePage";
import { firestore, initializeApp } from "firebase"

import './css/reset.css'
import './css/basic.css'

const App = () => {
  const [page, setPage] = useState("home");
  switch (page) {
    case "home":
      return <HomePage onPageChange = {setPage}/>;
    case "lecturer":
      return <LecturerPage onPageChange={setPage} />;
    case "attendee":
      return <AttendeePage onPageChange={setPage}/>;
    default:
      return <div>Page not found.</div>;
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyCnrkT3RzPjZTwwlXV7Sb3mxJ_d0dl0pEQ",
  authDomain: "tara-db47c.firebaseapp.com",
  databaseURL: "https://tara-db47c.firebaseio.com",
  projectId: "tara-db47c",
  storageBucket: "tara-db47c.appspot.com",
  messagingSenderId: "943976214403",
  appId: "1:943976214403:web:2311382d808bbdd8"
};
initializeApp(firebaseConfig);
export const db = firestore();

export default App;
