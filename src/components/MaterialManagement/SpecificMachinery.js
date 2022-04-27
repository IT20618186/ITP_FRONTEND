import axios from 'axios';
import React, { Component } from 'react';

class SpecificMachinery extends Component {

    constructor(props){
        super(props);

        this.state={
            machinery:[]
        };

    }

    componentDidMount(){
        const id = this.props.params.id;

        axios.get(`http://localhost:8000/machinery/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    machinery: res.data.machinery
                });

                console.log(this.state.machinery);
            }
        });
    }


    render() {

        const {machineryId,description,quantity,purchasedDate,imageUrl} = this.state.machinery;

        return (
            <div className="container" style={{marginTop:'20px'}}>
                <h3>Machinery ID : {machineryId}</h3>
                <hr/>

                <div className='col-sm-3'>Description</div>
                <div className='col-sm-9'>{description}</div>

                <div className='col-sm-3'>Quantity</div>
                <div className='col-sm-9'>{quantity}</div>

                <div className='col-sm-3'>Date of Purchased</div>
                <div className='col-sm-9'>{purchasedDate}</div>

                <div className='col-sm-3'>View</div>
                <div className='col-sm-9'>{imageUrl}</div>
            </div>
        );
    }
}

export default SpecificMachinery;
