import './App.css';
import { useState, createContext } from "react";
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

import Cart from './routes/Cart.jsx';

// Context API 사용법
export let Context1 = createContext(); // Context 생성 (state 보관함)

function App() {
  const [shoes, changeShoes] = useState(products);
  const [inventory, setInventory] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">STORE</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link> */}
            <button onClick={() => { navigate('/') }}>Home</button>
            <button onClick={() => { navigate('/detail') }}>Detail</button>
          </Nav>
          <Nav className='move-btn'>
            <button className="prev-btn" onClick={() => { navigate(-1) }}>←</button>
            <button className="next-btn" onClick={() => { navigate(1) }}>→</button>
          </Nav>
        </Container>
        <button onClick={() => {
          shoes.sort((item1, item2) => item1.title.localeCompare(item2.title));
          console.log(shoes);
        }}>정렬</button>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={changeShoes} mainBg={mainBg} />} />

        <Route path="/detail/:id" element={
          // <Context.Provider>로 원하는 컴포넌트 감싸기
          <Context1.Provider value={{inventory}}> {/* 공유를 위한 속성 추가 value={{ state1, state2, ... }} */}
          <Detail shoes={shoes} changeShoes={changeShoes} />
          </Context1.Provider>
          // <Detail shoes={shoes} changeShoes={changeShoes} />
        } />
        
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/about" element={ <div>about</div> } />
        <Route path="/about/member" element={ <div>about</div> } />
        <Route path="/about/location" element={ <div>about</div> } /> */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>


    </div>
  )
}

export default App
