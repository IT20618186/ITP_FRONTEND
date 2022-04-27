import React, {useState} from "react";
import axios from "axios";

function AddTimescheduling(){

    const [contractID, setContractID] = useState("");
    const [processID, setProcessID] = useState("");
    const [division, setDivision] = useState("");
    const [progress, setProgress] = useState("");
    const [dateUpdated, setDateUpdated] = useState("");


    function sendData(e){
        
        e.preventDefault();
        
        const newTimeschedulings ={
            contractID,
            processID,
            division,
            progress,
            dateUpdated
        }

        axios.post("http://localhost:8000/timeScheduling/save", newTimeschedulings).then(()=>{
            alert("New Time Schedule Added.");
            
        }).catch((err)=>{
            alert(err);
        })

    }


    return(
        <div className="container">
            <div className="hero">
               <nav className="prmenu">
                    <ul className="">
                        <li><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>                    
                        <li><a href="/add-schedule"><i class="fa-solid fa-circle-plus"></i> Add Schedule</a></li>
                        <li><a href="/viewSchedule"><i class="fa-solid fa-list"></i> List of Schedules</a></li>
                    </ul>
               </nav>       
            </div>
            
            <u><h2 className="h-tag"><i class="fa-solid fa-circle-plus"></i> Add Schedule Details </h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>

                <div className="form-group">
                    <label for="Con_ID">Contract ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Con_ID" placeholder="Enter Contract's ID" onChange={(e) =>{

                        setContractID(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="pID">Process ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="pID" placeholder="Enter Process's ID" onChange={(e) =>{

                        setProcessID(e.target.value);

                    }}></input>
                </div>
                
                <div className="form-group">
                    <label for="Division">Division :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Division" placeholder="Enter Division" onChange={(e) =>{

                        setDivision(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="Progress">Progress :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Progress" placeholder="Enter Quantity" onChange={(e) =>{

                        setProgress(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="date">Date of Updated :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="date" placeholder="Enter Date of Update" onChange={(e) =>{

                        setDateUpdated(e.target.value);

                    }}></input>
                </div>

                
                <button type="submit" className="btn-Search">Submit</button>
            </form>

            </div>
            
        </div>
    )
}
export default AddTimescheduling;
