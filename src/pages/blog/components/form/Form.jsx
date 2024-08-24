import React, { useState } from 'react'

const Form = ({type,submit}) => {

const [blog,setBlog]=useState({
	title:"",
	subtitle:"",
	image:"",
	description:"",
	category:""
})

const handleChange=(e)=>{
	const {name,value}=e.target
	setBlog({
		...blog,
		[name]:name==="image"?e.target.files[0]:value
	})
}


const handleSubmit=(e)=>{
e.preventDefault()
 submit(blog)
}
    
  return (

   <form onSubmit={handleSubmit}>

<div class="flex justify-center  w-screen h-screen">

<div class="container my-3 px-4 lg:px-20 ">

	<div class="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">
		<div class="flex">
			<h1 class="font-bold uppercase text-5xl">{type} <br /> Blog</h1>
		</div>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
			<input onChange={handleChange}  required   name="title" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
		type="text" placeholder="Title*" />
			<input onChange={handleChange}  required name="subtitle" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
		type="text" placeholder="Subtitle*" />
			<input onChange={handleChange}    name="image" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
		type="file"  />
			<input onChange={handleChange}  required name="category" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
		type="text" placeholder="Category*" />
	</div>
			<div class="my-4">
				<textarea onChange={handleChange}  required  name="description" placeholder="Description*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
			</div>
			<div class="my-2 w-1/2 lg:w-1/4">
				<button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
				  focus:outline-none focus:shadow-outline">
		Submit
	  </button>
			</div>
		</div>


</div>

</div>
   </form>
  )
}

export default Form