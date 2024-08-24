import React from 'react'
import Form from './components/form/Form'
import axios from "axios"
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

const Register = () => {
const navigate=useNavigate()
const handleRegister=async (data)=>{


  try {
    const response= await axios.post(`${baseUrl}/register`, data)

    if(response.status===201){
   navigate("/login")
    }else{
     alert("Register failed")
    }
  } catch (error) {
    alert(error?.response?.data?.message)
  }
}



  return (
    <Form type='Register' submit={handleRegister}/>
  )
}

export default Register