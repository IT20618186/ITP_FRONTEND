import React, {useState} from "react";
import axios from "axios";

function AddMaterials(){

    const [contractID, setContractID] = useState("");
    const [materialID, setMaterialID] = useState("");
    const [materialType, setMaterialType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const [contractIDErr, setContractIDErr] = useState({});
    const [materialIDErr, setMaterialIDErr] = useState({});


    function sendData(e){
        
        e.preventDefault();
        const isValid = formValidation();

        if(isValid) {
        const newMaterial ={
            contractID,
            materialID,
            materialType,
            quantity,
            price
        }

        axios.post("http://localhost:8000/material/save", newMaterial).then(()=>{
            alert("New Material Added.");
            window.location = '/materials';
            
        }).catch((err)=>{
            alert(err);
        })
    
        }
    }

    const formValidation = () =>{
        const contractIDErr = {};
        const materialIDErr = {};
        let isValid = true;

        if(!contractID.includes("CON")){
            contractIDErr.contractIdCON = "ContractID should start with 'CON' "
            isValid = false;
        }

        if(!materialID.includes("M")){
            materialIDErr.materialIdM = "MaterialID should start with 'M' "
            isValid = false;
        }

        setContractIDErr(contractIDErr);
        setMaterialIDErr(materialIDErr);

        return isValid;

    }



    return(
        <div className="container">
            <div className="hero">
               <nav className="prmenu">
                    <ul className="">
                        <li><a href="/material-home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                        <li><a href="/add-material"><i class="fa-solid fa-circle-plus"></i> Add Material</a></li>
                        <li><a href="/materials"><i class="fa-solid fa-list"></i> List of Materials</a></li>
                    </ul>
               </nav>       
            </div>
            
            <u><h2 className="h-tag"><i class="fa-solid fa-circle-plus"></i> Add Material Details</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>

                <div className="form-group">
                    <label for="Con_ID">Contract ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Con_ID" placeholder="Enter Contract's ID" onChange={(e) =>{

                        setContractID(e.target.value);

                    }}></input>

                    {Object.keys(contractIDErr).map((key) =>{
                        return <div style={{color : "red"}}>{contractIDErr[key]}</div>
                    })}
                </div>

                <div className="form-group">
                    <label for="ID">Material ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="ID" placeholder="Enter Material's ID" onChange={(e) =>{

                        setMaterialID(e.target.value);

                    }}></input>

                    {Object.keys(materialIDErr).map((key)=>{
                        return <div style={{color : "red"}}>{materialIDErr[key]}</div>
                    })}
                </div>
                
                <div className="form-group">
                    <label for="Material_Type">Material Type :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Material_Type" placeholder="Enter Material's Type" onChange={(e) =>{

                        setMaterialType(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="Quantity">Material's Quantity :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Quantity" placeholder="Enter Quantity" onChange={(e) =>{

                        setQuantity(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="price">Price :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="price" placeholder="Enter Price" onChange={(e) =>{

                        setPrice(e.target.value);

                    }}></input>
                </div>

                
                <button type="submit" className="btn-Search">Submit</button>
            </form>

            </div>
            
        </div>
    )
}
export default AddMaterials;
