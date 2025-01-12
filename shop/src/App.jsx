import './App.css';
import {useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import MainPage from './routes/Main.jsx';
import DetailPage from './routes/Detail.jsx';
import mainBg from './img/bg-150x150.png';
import products from './data.js';

function App() {
  const [shoes] = useState(products);
  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">STORE</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link> */}
            <Link onClick={()=>{navigate('/')}}>Home</Link>
            <Link onClick={()=>{navigate('/detail')}}>Detail</Link>
            <Link onClick={()=>{navigate(-1)}}>←</Link>
            <Link onClick={()=>{navigate(1)}}>→</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <MainPage shoes={shoes} mainBg={mainBg}/> } />
        <Route path="/detail" element={ <DetailPage shoes={shoes} /> } />
        <Route path="/about" element={ <div>about</div> } />
      </Routes>

      
    </div>
  )
}

export default App
