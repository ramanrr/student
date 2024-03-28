// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AddData from './components/AddData';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Update from './components/Update';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import image from './student.png'

function App() {
  // const [user,setUser]=useState([])
// const CatchChildData = (values)=>{
//   setUser(values)
// }
  return (
    <><Navbar sticky="top" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Student</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: Ram
            <Image src={image} width="50px" roundedCircle />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Row>&nbsp;</Row>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddData />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
      </BrowserRouter>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>

      </Container>
      </>
    
  );
}

export default App;
