import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navigation = ()=>{
    return (
                <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">MI Al-Markaz</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Beranda</Nav.Link>
                    <Nav.Link href="#action2">Staff</Nav.Link>
                    <NavDropdown title="layanan" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Administrasi</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Kesiswaan
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Layanan 24 jam
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" unabled>
                    Contact Service
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Masukkan Kata Kunci"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="primary">Cari</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default navigation;