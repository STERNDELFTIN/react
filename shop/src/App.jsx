import './App.css';
import {useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import mainBg from './img/bg-150x150.png';
import products from './data.js';

function App() {

  let [shoes] = useState(products);

  return (
    <div className='App'>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={ { backgroundImage: 'url(' + mainBg + ')' }}></div>

      <div className='container'>
        <div className='row'>
          {
            shoes.map((item) => {
              return <ShoesInfo img={item.img} title={item.title} price={item.price} />
            })
          }
        </div>
      </div>
    </div>
  )
}

function ShoesInfo(props) {
  return (
    <div className='col-md-4'>
      <img src={props.img} width="80%"/>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
}

export default App
