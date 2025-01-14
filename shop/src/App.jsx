import './App.css';
import { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import Main from './routes/Main.jsx';
import Detail from './routes/Detail.jsx';
import About from './routes/About.jsx';
import Event from './routes/Event.jsx';
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
            <button onClick={()=>{navigate('/')}}>Home</button>
            <button onClick={()=>{navigate('/detail')}}>Detail</button>
          </Nav>
          <Nav className='move-btn'>
            <button className="prev-btn" onClick={()=>{navigate(-1)}}>←</button>
            <button className="next-btn" onClick={()=>{navigate(1)}}>→</button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <Main shoes={shoes} mainBg={mainBg}/> } />
        <Route path="/detail" element={ <Detail shoes={shoes} /> } />
        {/* <Route path="/about" element={ <div>about</div> } />
        <Route path="/about/member" element={ <div>about</div> } />
        <Route path="/about/location" element={ <div>about</div> } /> */}
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <div>member</div> } />
          <Route path="location" element={ <div>location</div> } />
        </Route>

        <Route path="/event" element={ <Event /> }>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>

        <Route path="*" element={ <div>없는 페이지</div> } />
      </Routes>

      
    </div>
  )
}

export default App
