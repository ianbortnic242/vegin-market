import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const NavbarBasic = () => {
  return (  
    <Navbar className="custom-nav maxbox" bg='light' expand="lg">
      <Container className='maxbox'>
        <Navbar.Toggle className="yanbo" aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='griega'>
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