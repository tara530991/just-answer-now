import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LecturerPage from "./pages/LecturerPage";
import AttendeePage from "./pages/AttendeePage";

const App = () => {
  const [page, setPage] = useState("home");
  switch (page) {
    case "home":
      return <HomePage />;
    case "lecturer":
      return <LecturerPage />;
    case "attendee":
      return <AttendeePage />;
    default:
      return <div>Page not found.</div>;
  }
};

export default App;
