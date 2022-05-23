import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';




const AddCustomer = props => ( <tr >
   
    <td > { props.customer.customerName } </td>
    <td > { props.customer.customerEmail} </td>
    <td > { props.customer.customerUsernmae} </td>
    <td > { props.customer.customerPhone} </td>
    <td > { props.customer.customerPassword} </td> 
    <td > { props.customer.customerConfirmPassword} </td> 
   
    </tr> 
)

export default class AllCustomers extends Component {
    constructor(props) {
        super(props);


        this.state = {
            customers: []
        };
    }



    componentDidMount() {
        axios.get(`http://localhost:8000/customers/read`)
            .then(response => {
                this.setState({ customers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get(`http://localhost:8000/customers/read`)
            .then(response => {
                this.setState({ customers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }




    AllCustomers() {
        return this.state.customers.map(currentecustomer => {
            return <customer customer = { currentecustomer }
            deletecustomer = { this.deletecustomer }
            key = { currentecustomer._id }
            />;
        })
    }


    myfunction(){
   
        window.print();
       }

    

    render() {return (
         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Customer details </h4> </div >
            <div className = "col-lg-3 mt-2 mb-2" >
           
            </div > 
            </div> 
            <table  table class="table table-bordered">
            <thead className = "thead-light" >
            <tr >
            <th > customerName</th> 
            <th > customerEmail </th> 
            <th > customerPhone </th> 
            <th > customerUsername </th>
            < th >customerPassword </th> 
            <th>customerConfirmPassword</th>
            
           
            </tr >
            </thead> <tbody > {this.state.customer.map(props =>
                    <tr key = { props.customerName} >
                    <td > {props.customerEmail} </td> 
                    <td > { props.customerPhone } </td>
                    <td > { props.customerUsername } </td> 
                    <td > { props.customerPassword} </td> 
                    <td > { props.customerConfirmPassword } </td>                  
                    </tr>
                )

            }

            </tbody> </table >
            
            <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1"
                      variant = "primary"  onClick ={this.myfunction} > 
                      Print </Button>
                     
                     </div>
            
            </div>
        )
    }
}