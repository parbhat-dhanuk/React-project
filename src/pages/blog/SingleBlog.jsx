import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../config'
import axios from 'axios'

const SingleBlog = () => {
const navigate=useNavigate()
const [blog,setBlog]=useState({})
const {id}=useParams()

const fetchBlog=async()=>{
const response=await axios.get(`${baseUrl}/blog/${id}`)
console.log(response)
if(response.status===200){
    setBlog(response.data.data)
}
}



useEffect(()=>{
fetchBlog()
},[])


const deleteBlog=async()=>{
    const response=await axios.delete(`${baseUrl}/blog/${id}`,{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    })

    if(response.status===200){
        navigate("/")
    }else{
        alert("something went wrong")
    }
}


  return (
    <Layout>

<div class="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={blog?.imageUrl} alt="Product Image" />
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <Link to={`/blog/edit/${id}`}>
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button> 
                        </Link>
                    </div>
                    <div class="w-1/2 px-2">
                        
                        <button onClick={deleteBlog} class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                    
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    
                  
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Subtitle:</span>
                        <span class="text-gray-600 dark:text-gray-300">{blog.subtitle}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                        <span class="text-gray-600 dark:text-gray-300">{blog.category}</span>
                    </div>


                  
                    
                        
                    
                </div>
 
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {blog.description}
                    </p>
                </div>
            </div>
            
          

        </div>
    </div>
</div>

    </Layout>
  )
}

export default SingleBlog