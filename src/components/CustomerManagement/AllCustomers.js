import React, { Component } from "react";
import axios from "axios";
import CusNavbar from "./CusNavbar";



export default class AllCustomers extends Component {

    //initialize constructor 
    constructor(props){
         super(props);
         this.state ={
         customers:[]
};   

    }

//call method
componentDidMount(){
    this.retrieveCustomers();
}

    
//method
retrieveCustomers(){
   axios.get("http://Localhost:8000/customers/read").then(res =>{  //backend url for get request 
     if (res.data.success){
         this.setState({
            customers:res.data.existingCustomers //we get all the customers to customers variable 
       }); 
     console.log(this.state.customers);
}
   });
}  




//delete method

onDelete = (id) => {
   axios.delete(`http://Localhost:8000/customers/delete/${id}`).then((res) =>{
alert("Deleted succefully");
this.retrieveCustomers(); //show exisitng customers after deleting 
   })
}


render(){
   return(
      <>
      <CusNavbar/> 
   <div className="container" >
       
      <h3 className="h-tag">All Customer Details</h3>  
      <br></br>
                 <table className="table">
                  <thead>
                  <tr> 
                     <th scope="col">#</th>
                     <th scope="col">Customer ID</th>
                     <th scope="col">Customer Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Phone Number</th>
                     <th scope="col">User Name</th>
                     <th scope="col">Password</th>
                     <th scope="col">Confirm Password</th>
                     <th scope="col">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                     {this.state.customers.map((customers,index) =>(
                        <tr key={index}> 
                           <th scope = "row">{index+1}</th>
                           <td>{customers.customerID}</td>
                           <td>
                <a href= {`/customer/read/${customers._id}`} style = {{textDecoration:'none'}} >
                              {customers.customerName}
                           </a>
                           </td> 
                           
                           <td>{customers.customerEmail}</td>
                           <td>{customers.customerPhone}</td>
                           <td>{customers.customerUsername}</td>
                           <td>{customers.customerPassword}</td>
                           <td>{customers.customerConfirmPassword}</td>
                           <td>
                               <a className="btn btn-warning" href ={`/customers/edit/${customers._id}`}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                               </a>
                               &nbsp;
                               <a className="btn btn-danger" href="#" onClick={() => this.onDelete(customers._id)} >
                                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                               </a>
                           </td>
                        </tr>
                     ))}
                  </tbody>
                 </table>
                 <button className="btn btn-success"> 
                          <a href="/customers/add" style={{textDecoration:'none',color:'white'}}>
                          <i class="fa fa-plus" aria-hidden="true"></i>
                          &nbsp; Add Customer
                          </a>
                 </button>
                 &nbsp;&nbsp;&nbsp;
                <button class="btn btn-success" 
                 onClick={() => window.print()}>
                    <i class="fa-solid fa-print"></i>
                    &nbsp;
                     Genarate Report  </button>
    </div>
    </> 
    
   );
    
}
}
