import React, { useState, useEffect } from "react";
import axios from "axios";
import Cusfeedback from "./Cusfeedback";
import CusNavbar from "../CustomerManagement/CusNavbar";

export default function AllFeedbacks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  
  useEffect(() => {
    function getFeedbacks() {
      axios
        .get("http://Localhost:8000/feedbacks/read")
        .then((res) => {
          setFeedbacks(res.data.existingFeedbacks);
          console.log(res);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getFeedbacks();
  },
   []
  );

  const filterfeedbacks = feedbacks.filter((feedback) => {
    return feedback.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });


  // function Delete(id) {
  //   axios.delete(`http://localhost:8000/feedback/delete/${id}`).then((res) => {
  //     alert("customer Profile delete Successfully!")
  //     window.location.href="/"
  //   }).catch(err => { alert(err) });
  // }


  
  
  return (
    <>
      <CusNavbar />
      

      <div>
      
        <input
          style={{ margin: "auto", display: "block" }}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
       <div className="container1" style={{ alignitems: "center" }}>
        <div style={{ placeItems: "center" }}>
          {filterfeedbacks.map((feedback) => (
            <Cusfeedback feedback={feedback} />
          ))}
        </div>
      </div> 
     
    </>
  );
}