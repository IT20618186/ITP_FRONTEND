import axios from 'axios';
import React, {Component} from 'react';

class ViewSchedule extends Component {

    constructor(props){
        super(props);

        this.state={
            timeschedulings:[]
        };

    }

    componentDidMount(){
        this.retrieveTimeschedulings();
    }
    
    retrieveTimeschedulings(){
        axios.get("http://localhost:8000/timeScheduling").then(res =>{
            if(res.data.success){
                this.setState({
                    timeschedulings:res.data.existingTimeSchedulings
                });

                console.log(this.state.timeschedulings);
            }
        });
    }


    onDelete = (id) =>{

        axios.delete(`http://localhost:8000/timeScheduling/delete/${id}`).then((res) =>{
            alert("Delete Successfully");
            this.retrieveTimeschedulings();
        });
    }


    render() {
        return (
            <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul>
                            <li><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/add-schedule"><i class="fa-solid fa-circle-plus"></i> Add Schedule</a></li>
                            <li><a href="/viewSchedule"><i class="fa-solid fa-list"></i> List of Schedules</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag"><i class="fa-solid fa-list"></i> List of Time Schedule</h2></u>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Contract ID</th>
                            <th scope='col'>Process ID</th>
                            <th scope='col'>Division</th>
                            <th scope='col'>Progress</th>
                            <th scope='col'>Date of Updated</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.timeschedulings.map((timeschedulings,index) =>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{timeschedulings.contractID}</td>
                                <td>{timeschedulings.processID}</td>
                                <td>{timeschedulings.division}</td>
                                <td>{timeschedulings.progress}</td>
                                <td>{timeschedulings.dateUpdated}</td>
                                <td>
                                    <a className='btn btn-warning' href={`/edit-timeschedulings/${timeschedulings._id}`}>
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href="#" onClick={() =>this.onDelete(timeschedulings._id)}>
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

export default ViewSchedule;
