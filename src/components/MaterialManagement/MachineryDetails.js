import axios from 'axios';
import React, { Component } from 'react';

class MachineryDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            machineries:[]
        };

    }

    componentDidMount(){
        this.retrieveMachineries();
    }
    
    retrieveMachineries(){
        axios.get("http://localhost:8000/machineries").then(res =>{
            if(res.data.success){
                this.setState({
                    machineries:res.data.existingMechineries
                });

                console.log(this.state.machineries);
            }
        });
    }


    onDelete = (id) =>{

        axios.delete(`http://localhost:8000/machinery/delete/${id}`).then((res) =>{
            alert("Delete Successfully");
            this.retrieveMachineries();
        });
    }


    filterData(machineries, searchKey){
        const result = machineries.filter((machineries) =>
        machineries.description.toLowerCase().includes(searchKey) ||
        machineries.machineryId.toLowerCase().includes(searchKey) ||
        machineries.purchasedDate.toLowerCase().includes(searchKey)
        )

        this.setState({machineries:result})
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8000/machineries").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingMechineries, searchKey);
            }
        });

    }


    render() {
        return (
            <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul>
                            <li><a href="/material-home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/add-machinery"><i class="fa-solid fa-circle-plus"></i> Add Machinery</a></li>
                            <li><a href="/machinery"><i class="fa-solid fa-list"></i> List of machineries</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag"><i class="fa-solid fa-list"></i> Machinery And Equipment</h2></u>

                <div class="Search-bar">
                    <form class="Search-form">
                        <input class="Input-data" type="search" placeholder="Search" name='searchQuery' aria-label="Search" onChange={this.handleSearchArea}/>
                    </form>
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Machinery ID</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Purchased Date</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.machineries.map((machineries,index) =>(
                            <tr key={index}>
                                <th scope='row'>{index+1}</th>
                                <td>{machineries.machineryId}</td>
                                <td>{machineries.description}</td>
                                <td>{machineries.quantity}</td>
                                <td>{machineries.purchasedDate}</td>
                                <td><img className="mc_view" src={machineries.imageUrl} alt=""/></td>
                                <td>
                                    <a className='btn btn-warning' href={`/edit-machinery/${machineries._id}`}>
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href="#" onClick={() =>this.onDelete(machineries._id)}>
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

export default MachineryDetails;
