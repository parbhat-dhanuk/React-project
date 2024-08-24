import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { baseUrl } from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

const navigate=useNavigate()

 const handleAddBlog =async(data)=>{

  try {
    const response= await axios.post(`${baseUrl}/blog`,data,{
      headers:{
       "Content-Type":"multipart/form-data",
       "Authorization":localStorage.getItem("token")
      }
     })
     
     if(response.status===201){
       navigate("/")
     }else{
       alert("Blog created failed")
     }
  } catch (error) {
    alert(error?.response?.data?.message)
  }

 }



  return (
  <Layout>
	<Form type='Create' submit={handleAddBlog}/>
  </Layout>
  )
}

export default AddBlog