import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { baseUrl } from '../../config'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {

  const navigate=useNavigate()

   const {id}=useParams()


    const handleEditBlog=async(data)=>{

   try {
    const response = await axios.patch(`${baseUrl}/blog/${id}`,data,{
      headers:{
        "Content-Type":"multipart/form-data",
        "Authorization":localStorage.getItem("token")
      }
    })

    if(response.status===200){
      navigate("/")
    }else{
      alert("Something went wrong")
    }

   } catch (error) {
    alert(error?.response?.data?.message)
   }

  }


  return (
    <Layout>
        <Form type='Edit' submit={handleEditBlog} />
    </Layout>
  )
}

export default EditBlog