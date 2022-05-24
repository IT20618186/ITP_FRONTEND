import axios from 'axios';
import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import {render} from 'react-dom'

export default class MaterialReport extends Component {

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


    filterData(materials, searchKey){
        const result = materials.filter((materials) =>
        materials.contractID.includes(searchKey) ||
        materials.materialID.toLowerCase().includes(searchKey) ||
        materials.materialType.toLowerCase().includes(searchKey)
        )

        this.setState({materials:result})
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8000/materials").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingMaterials, searchKey);
            }
        });

    }


    render() {
        return (
            <div className="container"
            ref={el=>(this.componentRef=el)}
            >
                
                <u><h2 className="h-tag"><i class="fa-solid fa-list"></i> List of Used Materials </h2></u>

                <div class="Search-bar">
                    <form class="Search-form">
                        <input class="Input-data" type="search" placeholder="Search" name='searchQuery' aria-label="Search" onChange={this.handleSearchArea}/>
                    </form>
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Contract ID</th>
                            <th scope='col'>Material ID</th>
                            <th scope='col'>Material Type</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Price</th>
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
                            </tr>
                        ))}
                    </tbody> 
                </table>

                <a className='btn btn-warning' href={"/materials"}>
                <i class="fa-solid fa-caret-left"></i>&nbsp; Back
                </a>
                

                <div className='text-right mb-3'>
                        <ReactToPrint
                            trigger={()=>{
                            return <button className="btn btn-success" ><i class="fa-solid fa-file-pdf"></i>&nbsp; Print Report </button>
                            }}
                            content={()=>this.componentRef}
                            documentTitle = 'Contracts Material Report'
                            pageStyle= "print"
                        />
                    </div>
 
            </div>
        );
    }
}
