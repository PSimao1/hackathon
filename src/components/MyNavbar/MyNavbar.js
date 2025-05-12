import React from 'react';
import { Navbar, Container, Nav, Form, InputGroup, FormControl, NavDropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Btn from "../../components/Button/Btn";


function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm px-3">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#">Bookoe</Navbar.Brand>
        <div className="d-flex align-items-center w-100 justify-content-center">
          <Nav className="me-3">
            <NavDropdown title={<><img src="/menu.svg" alt="Menu" style={{ width: 20, height: 20, marginRight: 8 }} /> Menus</>} id="menu-dropdown">
              <NavDropdown.Item href="#accueil">Accueil</NavDropdown.Item>
              <NavDropdown.Item href="#produits">Produits</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="w-100" style={{ maxWidth: '600px' }}>
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search over 30 million book titles"
                aria-label="Search"
                style={{ borderRight: '0' }}
              />
              <InputGroup.Text style={{ backgroundColor: '#fff' }}>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        <div className="ms-3">

          <Btn size="sm" style={{ backgroundColor: '#F0EEFF' , color: 'black'}}> 
            Login
          </Btn>
           </div>
           <div className="ms-3"></div>
          <Btn
         
            size="sm"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 13C8.13401 13 5 16.134 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 15.0294 7.02944 11 12 11C16.9706 11 21 15.0294 21 20V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V20C19 16.134 15.866 13 12 13Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 11C14.2091 11 16 9.20916 16 7.00002C16 4.79088 14.2091 3.00002 12 3.00002C9.79086 3.00002 8 4.79088 8 7.00002C8 9.20916 9.79086 11 12 11ZM12 13C15.3137 13 18 10.3137 18 7.00002C18 3.68631 15.3137 1.00002 12 1.00002C8.68629 1.00002 6 3.68631 6 7.00002C6 10.3137 8.68629 13 12 13Z"
                  fill="white"
                />
              </svg>
            }
          >
            Sign Up
          </Btn>
          


        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

