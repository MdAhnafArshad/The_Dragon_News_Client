import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            console.log('sign out')
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Time: </p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={200} className="text-danger">
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>}</Nav.Link>
                            {
                             user ? <Button onClick={handleLogOut} variant="dark">LogOut</Button> : <Link to="/login"><Button variant="dark">logIn</Button></Link>   
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;