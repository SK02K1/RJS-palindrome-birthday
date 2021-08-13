import "./styles.css";
import { getMessage } from "./modules/functions.js";
import { useState } from "react";

let dateOfBirth = "";

export default function App() {
  const [message, setMessage] = useState("");

  const checkBtnClickHandler = (e) => {
    if (dateOfBirth !== "") {
      const dateElements = dateOfBirth.split("-");
      const date = {};
      date.day = Number(dateElements[2]);
      date.month = Number(dateElements[1]);
      date.year = Number(dateElements[0]);

      setMessage("Checking...");

      setTimeout(() => {
        setMessage(getMessage(date));
      }, 1500);
    } else {
      setMessage("Please enter a valid date");
    }
  };

  return (
    <div className="App">
      <h1>Palindrome birthday checker</h1>
      <h2>
        Enter your birthdate and we will tell you if your birthdate is a
        palindrome
      </h2>
      <small className="msg-date-format">
        This app checks your birthdate in 6 formats -
        <span className="text-heightlight">DD-MM-YYYY</span>
        <span className="text-heightlight">MM-DD-YYYY</span>
        <span className="text-heightlight">YYYY-MM-DD</span>
        <span className="text-heightlight">DD-MM-YY</span>
        <span className="text-heightlight">MM-DD-YY</span>
        <span className="text-heightlight">YY-MM-DD</span>
      </small>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="dob">Enter your DOB</label>
        <input
          onChange={(e) => (dateOfBirth = e.target.value)}
          type="date"
          required
        />
        <button onClick={checkBtnClickHandler} type="submit">
          Check
        </button>
      </form>
      <div className="output-container">{message}</div>
    </div>
  );
}
