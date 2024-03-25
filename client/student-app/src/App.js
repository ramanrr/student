// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AddData from './components/AddData';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Update from './components/Update';
function App() {
  // const [user,setUser]=useState([])
// const CatchChildData = (values)=>{
//   setUser(values)
// }
  return (
    <><Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Student</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: Ram
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddData />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
      </BrowserRouter>
      </Container>
      </>
    
  );
}

export default App;
