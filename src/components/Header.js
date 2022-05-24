import React from "react";

function Header() {
    

    return(
        <nav className="navbar bootsnav">

            <div className="container">
                
                <div className="navbar-header">
                    
                    <a className="navbar-brand" href=""><img className="logo" src="../images/logo2.png" alt=""/></a>
                </div>
                
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav menu">
                        <li><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>                    
                        <li><a href="/about"><i class="fa-solid fa-eject"></i> About</a></li>
                        <li><a href="/signup"><i class="fa-solid fa-circle-user"></i> Profile</a></li>
                        <li><a href="/signin"><i class="fa-solid fa-arrow-rotate-left"></i> Logout</a></li>
                    </ul>
                </div>
            </div>   
        </nav>
    )
}

export default Header;

