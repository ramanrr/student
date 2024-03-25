import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';

export default function AddData() {
    const [FormData,setFormData]=useState({name:'',email:'',age:''})
    const handleChange=(e)=>{
        setFormData({...FormData,[e.target.name]:e.target.value})
    }
    const baseUrl = "http://localhost:6005/api/v1/students/";
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        axios.post(`${baseUrl}add-student-details`,FormData)
        .then((response) => {
            console.log(response)
            setFormData({
                name:'',
                email:'',
                age:''
              });
              fetchInfo();
        })
        .catch((error) => console.log(error));
    }

   
    const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(`${baseUrl}all`).then((res) => setData(res.data));
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  const handleDelete = (id)=>{
    if(window.confirm('Are you sure want to delete this..?')){
        axios.delete('http://localhost:6005/api/v1/students/delete-student-details/'+id).then(res=>fetchInfo()).catch(err=>console.log(err))
  }
        
}


  return (
    <div className='addDatas'>
        <h3 className='stuRegiser'>Student Registration</h3>
        <div className='d-flex justify-content-center'>
            
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type='text'
                name='name'
                placeholder='Name'
                value={FormData.name}
                onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type='email'
                name='email'
                placeholder='Email'
                value={FormData.email}
                onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Age</Form.Label> */}
        <Form.Control type='text'
                name='age'
                placeholder='Age'
                value={FormData.age}
                onChange={handleChange} />
      </Form.Group>
      <Button type='submit' variant="success">Submit</Button>
    </Form>
    </div>
    <div>&nbsp;</div>
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {data.map((dataObj, index) => {
          return (<tr key={index}>
                <td>{index+1}</td>
                <td>{dataObj.name}</td>
                <td>{dataObj.email}</td>
                <td>{dataObj.age}</td>
                <td><Button variant="info"><NavLink className="updateBtn" to={`/update/${dataObj._id}`}>Edit</NavLink></Button> | <Button variant="danger"  onClick={()=>handleDelete(dataObj._id)}>Delete</Button></td>
              </tr>
               );
            })}
            </tbody>
          </Table>
   
          </div>
  )
}
