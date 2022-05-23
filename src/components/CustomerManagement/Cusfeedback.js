import { Button } from "react-bootstrap";
import axios from "axios";
const Cusfeedback = ({ feedback }) => {
  function Delete(id) {
    axios.delete(`http://localhost:8000/feedbacks/delete/${feedback._id}`).then((res) => {
      alert("Customer feedback deleted Successfully!")
      window.location.href="/customer/fb"
    }).catch(err => { 
      console.log(err);
      alert(err) });
  }
  return (

    <>
    
    <div class="card" style={{height:'auto' , 
    textAlign:'center' , width:'auto'}}>
      <div class="card-body">
    
        <p class="card-title">
          <div><h6>Name</h6></div>
          {feedback.name}
        </p>
        <p class="card-text">
          <div><h6>Your Feedback</h6></div>
          <p>{feedback.yourfeedback}</p>
        </p>
        <p class="card-text">
          <div><h6>Email</h6></div>
          <p>{feedback.email}</p>
        </p>
        <p class="card-text">
          <div><h6>Rating</h6></div>
          <p>{feedback.rating}</p>
        </p>

        <button  class="btn btn-primary stretched-link" onClick={() =>Delete(feedback._id)}>
          Delete
        </button>
        
      </div>
    </div>
    
    </>
  );
};

export default Cusfeedback;
