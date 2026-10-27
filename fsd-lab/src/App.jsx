import { useState } from 'react'
import './App.css'
function handleSubmit(e){
  e.preventDefault();
  alert("Name: " + e.target.name.value + "\nEmail: " + e.target.email.value + "\nMessage: " + e.target.message.value);
}
  
function App() {
  return (
    <>
  <center>
    
    <h1>Student Management Application</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Student Name:</label>
      <input type="text" id="name" name="name" required /><br /><br />
      <label htmlFor="text">Subject 1:</label>
      <input type="text" id="text" name="text" required /><br /><br />
      <label htmlFor="message">Subject 2:</label>
      <input type="text" id="me" name="message" required /><br /><br />
      <label htmlFor="message">Subject 3:</label>
      <input type="text" id="message" name="message" required /><br /><br />
      <label htmlFor="message">Subject 4:</label>
      <input type="text" id="message" name="message" required /><br /><br />
      <label htmlFor="message">Subject 5:</label>
      <input type="text" id="message" name="message" required /><br /><br />
      <button type="submit">Submit</button>
    </form>

  </center>
</>

  )
}
const Total = number(subject1) + number(subject2) + number(subject3) + number(subject4) + number(subject5);
console.log("Total Marks: " + Total + "<br/>");
const percentage = (Total / 500) * 100;
console.log("Percentage: " + percentage + "%<br/>");

export default App
