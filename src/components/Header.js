import React from 'react';
// import HamburgerMenu from './hamburgermenu';
import './header.css';
// import '../common/common.css';
import {Navbar, Nav} from 'react-bootstrap';

const HeaderComponent = (props) => {
    return(
        <div className="navbar-container">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/">HappyLoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">
                            <img className="user-avatar" 
                            src="./assets/icons-login.png"
                            alt="icons-login" 
                            />Login/Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        // <div className="header-component">
        //     <div className="grid flex-container header-components">
        //         <div className="header-mobile-nav">
        //             <HamburgerMenu />
        //             <a className='hdr-logo' href="/">
        //                 <img className="" src="../assets/hdr-logo.png"/>
        //             </a>
        //             <a href="/login" className="user-avatar-li">
        //                 <img className="user-avatar" src="./assets/icons-login.png"/>
        //             </a>
        //         </div>
        //         <div className="navigation-menu-container">
        //             <ul className="navigation-menu">
        //                 <li><a href="/testimonials">Testimonials</a></li>
        //                 <li><a href="/services">Services</a></li>
        //                 <li><a href="/contact">Contact Us</a></li>
        //                 <li><a href="/about-us">About Us</a></li>
        //                 <li>
        //                     <a href="/login">
        //                         <img className="user-avatar" src="./assets/icons-login.png"/>
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default HeaderComponent;