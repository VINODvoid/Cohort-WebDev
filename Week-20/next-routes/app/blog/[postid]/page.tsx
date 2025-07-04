import axios from 'axios'
import React from 'react'

const page = async({params}:{params:{
    postid:number
}}) => {
    const response =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const todo = response.data;
  return (
    <>
    <div>Blog Page {params.postid}</div>
    <div>{todo.title}</div>
    <div>{todo.body}</div>
    </>
  )
}

export default page 