import axios from 'axios';
import React, { Component } from 'react';

class EditMachinery extends Component {

    constructor(props){
        super(props);
        this.state={
            machineryId:"",
            description:"",
            quantity:"",
            purchasedDate:"",
            imageUrl:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {machineryId,description,quantity,purchasedDate,imageUrl} = this.state;

        const data ={
            machineryId:machineryId,
            description:description,
            quantity:quantity,
            purchasedDate:purchasedDate,
            imageUrl:imageUrl
        }

        console.log(data)

        axios.put(`http://localhost:8000/machinery/update/${id}`, data).then((res) =>{
            if(res.data.success){
                alert("machinery Updated Successfully");
                this.setState(
                    {
                        machineryId:"",
                        description:"",
                        quantity:"",
                        purchasedDate:"",
                        imageUrl:""
                    }
                )
            }
        });
    }



    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/machinery/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    machinery:res.data.machinery
                });

                console.log(this.state.machineryId);
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="hero">
                   <nav className="prmenu">
                        <ul className="">
                            <li><a href="/">Home</a></li>                    
                            <li><a href="/add-machinery">Add Machinery</a></li>
                            <li><a href="/machinery">List of machineries</a></li>
                        </ul>
                   </nav>       
                </div>
                
                <u><h2 className="h-tag">Edit Machinery Details</h2></u>
                <div className="input-form">
                <form className="forms">
                    <div className="form-group">
                        <label for="ID">Machinery ID :</label>&nbsp;<br></br>
                        <input type="text" className="inputcell" id="ID" placeholder="Enter Machinery ID"
                        value={this.state.machineryId}
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label for="description">Description :</label>&nbsp;<br></br>
                        <input type="text" className="inputcell" id="description" placeholder="Enter Description" 
                        value={this.state.description}
                        onChange={this.handleInputChange}></input>
                    </div>
    
                    <div className="form-group">
                        <label for="Quantity">Machinery's Quantity :</label>&nbsp;<br></br>
                        <input type="text" className="inputcell" id="Quantity" placeholder="Enter Quantity" 
                        value={this.state.quantity}
                        onChange={this.handleInputChange}></input>
                    </div>
    
                    <div className="form-group">
                        <label for="date">Date of Purchased :</label>&nbsp;<br></br>
                        <input type="text" className="inputcell" id="date" placeholder="Enter Date of Purchased Item" 
                        value={this.state.purchasedDate}
                        onChange={this.handleInputChange}></input>
                    </div>
    
                    <div className="form-group">
                        <label for="imageUrl">Machinery Image Url :</label>&nbsp;<br></br>
                        <input type="text" className="inputcell" id="imageUrl" placeholder="Enter Machinery's Picture Url"
                        value={this.state.imageUrl}
                        onChange={this.handleInputChange} ></input>
                    </div>
                    <button type="submit" className="btn-Search" onClick={this.onSubmit}>Update</button>
                </form>
    
                </div>
                
            </div>
        )
    }
}

export default EditMachinery;