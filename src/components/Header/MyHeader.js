import React from 'react'
import "../../css/myCss.css"
import "../../css/style.css"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  
} from 'reactstrap';

function MyHeader () {
  
    return (
      <div>
      <Navbar className="navbarCss" light expand="md">
        <div className="container">
        <NavbarBrand href="/"><p className="yazi">Weather Forecast</p></NavbarBrand>
        <NavbarToggler />
       
        </div>
      </Navbar>
    </div>
    )
  
}



        
export default MyHeader;