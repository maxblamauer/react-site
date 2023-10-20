import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import defaultUser from '../images/defaultUser.jpg'; 
import './componentStyles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    const { currentUser } = useAuth();
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleClick() {
        await logout();
        navigate('/login')
    }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color:"white"}} href="#home">
        <img
              src={currentUser.multiFactor.user.photoURL ? currentUser.multiFactor.user.photoURL : defaultUser}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color:"white"}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color:"white"}} href="/resume">Resume</Nav.Link>
            <Nav.Link style={{color:"white"}} href="/login" onClick={handleClick}>Signout</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;