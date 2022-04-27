import axios from 'axios';
import React, { Component } from 'react';

class MaterialDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            materials:[]
        };

    }

    componentDidMount(){
        this.retrieveMaterials();
    }
    
    retrieveMaterials(){
        axios.get("http://localhost:8000/materials").then(res =>{
            if(res.data.success){
                this.setState({
                    materials:res.data.existingMaterials
                });

                console.log(this.state.materials);
            }
        });
    }


    onDelete = (id) =>{

        axios.delete(`http://localhost:8000/material/delete/${id}`).then((res) =>{
            alert("Delete Successfully");
            this.retrieveMaterials();
        });
    }


    render() {
        return (
            <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul>
                            <li><a href="/material-home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/add-material"><i class="fa-solid fa-circle-plus"></i> Add Material</a></li>
                            <li><a href="/materials"><i class="fa-solid fa-list"></i> List of Materials</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag"><i class="fa-solid fa-list"></i> List of Materials</h2></u>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Contract ID</th>
                            <th scope='col'>Material ID</th>
                            <th scope='col'>Material Type</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.materials.map((materials,index) =>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{materials.contractID}</td>
                                <td>{materials.materialID}</td>
                                <td>{materials.materialType}</td>
                                <td>{materials.quantity}</td>
                                <td>Rs.{materials.price}.00</td>
                                <td>
                                    <a className='btn btn-warning' href={`/edit-material/${materials._id}`}>
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href="#" onClick={() =>this.onDelete(materials._id)}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
 
            </div>
        );
    }
}

export default MaterialDetails;
