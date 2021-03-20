import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to="/" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Ride Share</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home">
                        home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/checkoutinfo">
                        Destination
                   </Nav.Link>
                    <Nav.Link as={Link} to="/Blog">
                        Blog
                   </Nav.Link>
                    <Nav.Link as={Link} to="/Contact">
                        Contact
                   </Nav.Link>

                    {
                        loggedInUser.name ? <p style={{marginTop: '8px', color: 'white', fontWeight: 'bold'}}>{loggedInUser.name}</p> : 
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    }




                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;