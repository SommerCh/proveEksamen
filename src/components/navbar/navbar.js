
import React, {useState, useEffect} from 'react';
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import SearchPage from './search';
import './navbar.css'



const NavbarBootstrap =()=>{

    return(
         <BrowserRouter>
<div>

    <Navbar id="nav" expand="lg">
         
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">FORSIDE</Nav.Link>
            <Nav.Link href="Produkter">PRODUKTER</Nav.Link>
            <Navbar.Brand href="#">BAGERI</Navbar.Brand>
            <Nav.Link href="Kontakt">KONTAKT</Nav.Link>
            <Nav.Link href="Login">LOGIN</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
</div>

<Route path="/NavbarBootstrap" component={NavbarBootstrap} />
<Route path="/" component={NavbarBootstrap} />
<Route path="/NavbarBootstrap" component={NavbarBootstrap} />
<Route path="/NavbarBootstrap" component={NavbarBootstrap} />
   
 </BrowserRouter>
    )
}
export default NavbarBootstrap