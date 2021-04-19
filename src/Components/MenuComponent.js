import React, {Component, useState} from 'react';
import history from '../history';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../CSS/HomePageCSS.css'

class MenuComponent extends Component 
{
    render()
    {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-container">
                        <Nav.Link href="/contactus" className="navbar-btn-txt">צור קשר</Nav.Link>
                        <Nav.Link href="https://www.instagram.com/eaphonerepairisrael/" className="navbar-btn-txt">תיק עבודות</Nav.Link>

                        <Nav.Link href="/about" className="navbar-btn-txt">אודותינו</Nav.Link>
                        <Nav.Link href="/" className="navbar-btn-txt">דף הבית</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default MenuComponent;