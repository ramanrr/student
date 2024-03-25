import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Update() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')

    useEffect(()=>{
        axios.get('http://localhost:6005/api/v1/students/student-details/'+id).then(res=>  
       
              { 
                 setName(res.data.name)
              setEmail(res.data.email)
              setAge(res.data.age)}
        ).catch(err=>console.log(err))
    },[id])
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:6005/api/v1/students/update-student-details/'+id,{name,email,age}).then(res=>{
        navigate('/');
        }).catch(err=>console.log(err))
    }
  return (
    <div className='addDatas1'>
        <h3 className='stuRegiser'>Update Student</h3>
        <div className='d-flex justify-content-center'>
        <Form className='updateForm' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        {/* <Form.Label>Age</Form.Label> */}
        <Form.Control type='text'
                name='age'
                placeholder='Age'
                value={age}
                onChange={e=>setAge(e.target.value)} />
      </Form.Group>
      <Button type='submit' variant="success">Update</Button>
    </Form>
    </div>
    </div>
  )
}
