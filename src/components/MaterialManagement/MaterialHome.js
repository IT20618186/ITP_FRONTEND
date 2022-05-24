import React from 'react';

function Materialhome() {


    return (
        <div>
            <h1 className='h-tag'>Material Management</h1>
            <div className='adminHome'>
                <p>Materials management is defined as a management system that is required in planning and controlling the quality &
quantity of the material, punctual equipment placement, good
price and the right quantity as required. Material management
is a management system that integrates purchasing, shipping
and material control from suppliers. Based on those
definitions, generally materials management can be defined as
a process of planning, executing, and controlling the right
source of materials with the exact quality, at the right time and
place suitable for minimum cost construction process.
<br/><br/>
<span className='para1'>Resource Manager Can Manage : </span></p>

            <div className='rows'>

                <div className='col'>
                    
                    <div className='card card1'>
                        <a href='/materials'><h1 className='topic'><i class="fa-brands fa-accusoft"></i> Create Material List</h1></a>
                    </div>

                    <div className='card card2'>
                    <a href='/machinery'><h1 className='topic'><i class="fa-solid fa-truck-monster"></i> Machinery Management</h1></a>
                    </div>

                </div>

            </div>
            <br/>

            <p>Capability to coordinate and integrate purchasing, shipping
and material control from suppliers is required for material
cost control. Three important phases that holds the key to a
successful materials management are materials purchasing,
materials usage, and storage.</p>

            <img className="logo" src="../images/slider_img.jpg" alt=""/>
            
        </div>
        </div>
    );
}

export default Materialhome;
