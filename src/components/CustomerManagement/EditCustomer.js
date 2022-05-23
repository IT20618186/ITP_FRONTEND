import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, {useEffect , useState} from "react";
   

function EditCustomer() { 
    

const { id } = useParams();
const [customerprofile, setCustomerprofile] = useState({
    customerID : "",
    customerName : "",
    customerEmail : "",
    customerPhone : "",
    customerUsername : "",
    customerPassword : "",
    customerConfirmPassword :""

}) ;

const {
  customerID ,
  customerName ,
  customerEmail ,
  customerPhone,
  customerUsername,
  customerPassword,
  customerConfirmPassword 
} = customerprofile;


const onInputChange = (e, input_field) => {
  setCustomerprofile({
    ...customerprofile, [input_field]: e.target.value });
}

async function sendData(e){
  e.preventDefault();
  await axios.put(`http://localhost:8000/customer/update/${id}` , customerprofile).then(res =>{
    alert("Successfully Updated Customer Details");
  })
  .catch(err => {alert(err)});
}
const loadCustomerprofile = async() => {
  const res = await axios.get(`http://localhost:8000/customer/read/${id}`)
  setCustomerprofile(res.data.customer);
};

useEffect(() =>{
  loadCustomerprofile();
},
[]);







  return (
    <div className="container">
      <h1 className="h3 mb-3 font-weight-normal">Edit Customer Details</h1>
    <form onSubmit={sendData}>
      <div className="form-group">
        
        <label for="customerName">Customer Name</label>
        <input value={customerName}
               type="text"
               className="form-control"
               id="customerName" 
               placeholder="customer name"
               onChange={e => onInputChange(e, "customerName")}/>
       </div>

       <br></br>
     <div className="mb-3">
    <label for="customerID">Customer ID</label>
    <input value={customerID}
           type="text"
           className="form-control"
           id="customerID"
           placeholder="customer ID"
           onChange={e => onInputChange(e, "customerID")}/>
     </div>



       <br></br>
     <div className="mb-3">
    <label for="customerEmail">Customer Email</label>
    <input value={customerEmail}
           type="email"
           className="form-control"
           id="customerEmail"
           aria-describedby="emailHelp"
           placeholder="Email"
           onChange={e => onInputChange(e, "customerEmail")}/>
     </div>

 <br></br>
  <div className="mb-3">
    <label for="customerPhone">Phone number</label>
    <input  value={customerPhone}
            type="text"
            className="form-control"
            id="customerPhone"
            placeholder="Phone number" 
            onChange={e => onInputChange(e, "customerPhone")}/>
  </div>
  <br></br>
  <div className="mb-3">
    <label for="customerUsername">User Name</label>
    <input value={customerUsername}
           type="text"
           className="form-control"
           id="customerUsername"
           placeholder="User name"
           onChange={e => onInputChange(e, "customerUsername")}/>
  </div>
  <br></br>
  <div className="mb-3">
    <label for="customerPassword">Password</label>
    <input value={customerPassword}
           type="password"
           className="form-control"
           id="customerPassword"
           placeholder="password" 
           onChange={e => onInputChange(e, "customerPassword")}/>
    </div>
    <br></br>
  <div className="mb-3">
    <label for="customerConfirmPassword">Confirm Password</label>
    <input value={customerConfirmPassword}
           type="password"
           className="form-control"
           id="customerConfirmPassword"
           placeholder="confirm password"
           onChange={e => onInputChange(e, "customerConfirmPassword")}/>
  </div>
<br></br>
      <button type="submit"
              className="btn btn-success" >
        <i className="far fa-check-square"></i>
        &nbsp;Update
        
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/customers/read/"} className="btn btn-success">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      &nbsp; &nbsp;Back
      </Link>
     

    </form>
  </div>


  );
  };

export default EditCustomer;