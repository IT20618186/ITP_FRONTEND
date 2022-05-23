
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'



const Edit = () => {

   const { setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        machineryId:"",
        description:"",
        quantity:"",
        purchasedDate:"",
        imageUrl:""
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

        const res = await fetch(`http://localhost:8000/machinery/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.machinery);//must be change
        

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.machinery)//must be change
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {machineryId,description,quantity,purchasedDate,imageUrl} = inpval;

        const res2 = await fetch(`http://localhost:8000/machinery/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                machineryId,description,quantity,purchasedDate,imageUrl
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to  edit that data?");
        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/machinery")
            setUPdata(data2);
        }

    }



    
        return(
            <div className="container">
        
                <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/material-home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/add-machinery"><i class="fa-solid fa-circle-plus"></i> Add Machinery</a></li>
                            <li><a href="/machinery"><i class="fa-solid fa-list"></i> List of machineries</a></li>
                        </ul>
                    </nav>       
                </div>     
                
                <h2 className="h-tag"><i class="fa-solid fa-pen-to-square"></i> Update Machinery Details</h2>
                <div className="input-form">
                <form className="forms" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Machinery ID :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="machineryId"
                        placeholder="Enter Machinery ID"
                        value={inpval.machineryId}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Description :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="description"
                        placeholder="Enter Description"
                        value={inpval.description}
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
                        <label style={{marginBottom:'5px'}}>Purchased of Date :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="purchasedDate"
                        placeholder="Enter Purchased Date"
                        value={inpval.purchasedDate}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>image Url :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="imageUrl"
                        placeholder="Enter Image Url"
                        value={inpval.imageUrl}
                        onChange={setdata}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={updateuser} >
                        <i className="far fa-check-square"></i>
                        
                        
                        &nbsp; Save
                    </button>

                </form>
                </div>
            </div>
            
        )
    }

export default Edit;

