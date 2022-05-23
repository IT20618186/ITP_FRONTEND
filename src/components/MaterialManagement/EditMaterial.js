
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'



const EditMaterial = () => {

   const { setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        contractID:"",
        materialID:"",
        materialType:"",
        quantity:"",
        price:""
    });

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/material/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.Material);//must be change
        

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.Material)//must be change
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateMaterial = async(e)=>{
        e.preventDefault();

        const {contractID,materialID,materialType,quantity,price} = inpval;

        const res2 = await fetch(`http://localhost:8000/material/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                contractID,materialID,materialType,quantity,price
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to edit that data?");
        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/materials")
            setUPdata(data2);
        }

    }



    
        return(
            <div className="container">
        
                <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/material-home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/add-material"><i class="fa-solid fa-circle-plus"></i> Add Material</a></li>
                            <li><a href="/materials"><i class="fa-solid fa-list"></i> List of materials</a></li>
                        </ul>
                    </nav>       
                </div>     
                
                <h2 className="h-tag"><i class="fa-solid fa-pen-to-square"></i> Update Material Details</h2>
                <div className="input-form">
                <form className="forms" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract ID :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="contractID"
                        placeholder="Enter Contract ID"
                        value={inpval.contractID}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Material ID :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="materialID"
                        placeholder="Enter Material ID"
                        value={inpval.materialID}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Material Type :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="materialType"
                        placeholder="Enter Material Type"
                        value={inpval.materialType}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Quantity :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="quantity"
                        placeholder="Enter Quantity"
                        value={inpval.quantity}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Price :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="price"
                        placeholder="Enter Price"
                        value={inpval.price}
                        onChange={setdata}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={updateMaterial} >
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

                </form>
                </div>
            </div>
            
        )
    }

export default EditMaterial;

