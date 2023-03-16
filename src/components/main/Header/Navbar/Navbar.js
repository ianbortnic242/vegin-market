import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarBasic = () => {
  return (
    <Navbar fill variant="tabs" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/category/Introduccion">Introducción</Nav.Link>
            <Nav.Link href="/category/Objeciones">Objeciones</Nav.Link>
            <Nav.Link className="disabled" href="/">Salud</Nav.Link>
            <Nav.Link className="disabled" href="/">Compras</Nav.Link>
            <Nav.Link className="disabled" href="/">Recetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavbarBasic};