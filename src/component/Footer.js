import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MI Al-Markaz Maros</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Copyright All Rights Reserved <a href="#login" className='text-decoration-none'>2024</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
};

export default Footer;