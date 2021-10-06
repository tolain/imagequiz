import { useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const Menu = () => {
    const location = useLocation();

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Hello World App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#login">Sign In</Nav.Link>
                <Nav.Link href="#signup">Sign Up</Nav.Link>
                {(location.state && location.state.username) ?
                    <Navbar.Text>
                        Signed in as: <a href="#login">{location.state.username}</a>
                    </Navbar.Text>
                : ''}                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;