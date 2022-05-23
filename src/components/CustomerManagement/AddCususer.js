import React,{useState} from "react";
import axios from "axios";
import CusNavbar from "./CusNavbar";


export default function AddCususer(){

  
const [customerName, setCustomerName] = useState("");
const [customerEmail, setCustomerEmail] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
const [customerUsername,setCustomerUsername] = useState("");
const [customerPassword, setCustomerPassword] = useState("");
const [customerConfirmPassword,setCustomerConfirmPassword] = useState("");



function sendData(e){   
    e.preventDefault(); 
    // setCustomerID("12345");
    
    const newCususer = {
      
      customerName,
      customerEmail,
      customerPhone,
      customerUsername,
      customerPassword,
      customerConfirmPassword
    }
    axios.post("http://Localhost:8000/cususers/add", newCususer).then(() => { //backend url
    console.log("customer added")
        alert("You are added")
       
    }).catch((err)=>{
      console.log(err)
        alert(err)
    })
  }


    return(
      <>
      <CusNavbar/>
       <div className="container">
<br></br>
<form onSubmit={sendData}>
  
  <div className="mb-3">
    <label for="customerName">Customer Name</label>
    <input type="text" className="form-control" id="customerName"placeholder="Enter Your Name" onChange={(e)=> {
          setCustomerName(e.target.value)
      } } />
  </div>


  <div className="mb-3">
    <label for="customerEmail">Customer Email</label>
    <input type="email" className="form-control" id="customerEmail"
     aria-describedby="emailHelp" placeholder="Enter your email" onChange={(e)=> {
        setCustomerEmail(e.target.value)
    } }/>
    <div id="emailHelp" className="help">We'll never share your email with anyone else.</div>
  </div>



 <br></br>
  <div className="mb-3">
    <label for="customerPhone">Phone number</label>
    <input type="text" className="form-control" id="customerPhone" placeholder="Enter phone number" 
    onChange={(e)=> {
        setCustomerPhone(e.target.value)
    } } />
  </div>


  <div className="mb-3">
    <label for="customerUsername">User Name</label>
    <input type="text" className="form-control" id="customerUsername"placeholder="Enter your user name"
     onChange={(e)=> {
          setCustomerUsername(e.target.value)
      } } />
  </div>
 


  <div className="mb-3">
    <label for="customerPassword">Password</label>
    <input type="password" className="form-control" id="customerPassword"placeholder="password" 
    onChange={(e)=> {
        setCustomerPassword(e.target.value)
    } } />
    </div>

  <div className="mb-3">
    <label for="customerConfirmPassword">Confirm Password</label>
    <input type="password"className="form-control" id="customerConfirmPassword"placeholder="confirm password"
     onChange={(e)=> {
        setCustomerConfirmPassword(e.target.value)
    } } />

  </div>

  <br></br>

  <button type="submit" className="btn btn-success">
  <i class="fa fa-registered" aria-hidden="true"></i>
  &nbsp;
    Register</button>

</form>
 </div>  
       </>
    )
}