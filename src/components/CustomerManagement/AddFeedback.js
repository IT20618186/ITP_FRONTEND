import React,{useState} from "react";
import axios from "axios";
import CusNavbar from "../CustomerManagement/CusNavbar";
export default function AddFeedback(){

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [yourfeedback, setYourfeedback] = useState("");
const [value, setValue] = React.useState(false);
const [rating, setRating] = React.useState("");

const handleChange = (e) => {
  setRating(e.target.value);
  setValue(!value);
};

function sendData(e){   
    e.preventDefault(); 
   
    const newFeedback = {
        name,
        email,
        yourfeedback,
        rating
    }

    axios.post("http://localhost:8000/feedback/add",newFeedback).then(() => {
        alert("you are added")
        
    }).catch((err)=>{
        alert(err)
    })   
}

    return(
      <>
      <CusNavbar />
       <div className="container">
<form onSubmit={sendData}>

  <div class="mb-3">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name"
      placeholder="Enter your name" onChange={(e)=> {
          setName(e.target.value);
      } } />
  </div>
<br/>

  <div class="mb-3">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email"
     aria-describedby="emailHelp" placeholder="Enter your email" onChange={(e)=> {
        setEmail(e.target.value);
    } }/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div><br/>

  <div class="mb-3">
    <label for="feedback">Your Feedback</label>
    <input type="text" class="form-control" id="feedback"
      placeholder="Describe Your Feedback" onChange={(e)=> {
          setYourfeedback(e.target.value);
      } } />
  </div>

<br/>


  <div class="mb-3">
  <label for="rating">Your Rating</label>
        <br/>
        <input type="radio" value="verygood" name="rating" checked={value} onChange={(e) => {handleChange(e)}}/> Very Good
        <br/>
        <input type="radio" value="good" name="rating" checked={value} onChange={(e) => {handleChange(e)}}/> Good
        <br/>
        <input type="radio" value="mediCore" name="rating" checked={value} onChange={(e) => {handleChange(e)}}/> MediCore
        <br/>
        <input type="radio" value="bad" name="rating" checked={value} onChange={(e) => {handleChange(e)}}/> Bad
        <br/>
        <input type="radio" value="verybad" name="rating" checked={value} onChange={(e) => {handleChange(e)}}/> Very Bad
        <br/>
  </div>
  <br/>


  <div>
       

      </div>
   

  <button type="submit" class="btn btn-primary">Submit</button>

</form>

       </div>  
       </>
    )
}