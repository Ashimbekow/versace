import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ApiGet } from '../../api'
import Input1 from '../input/Input1'
import Input2 from '../input/Input2'
import Post from '../post/Post'

function Poisks() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        ApiGet.get().then(resp=>setPost(resp.data))
    },[])
    const handleInp=(e)=>{
        if(post.length!==0){
            setPost(post=>post.filter((item)=>item.title.includes(e.target.value) || item.body.includes(e.target.value) ))
        }else{
            ApiGet.get().then(resp=>setPost(resp.data))
        }
    }
    const handleInp2=(e)=>{
        if(post.length!==0){
            setPost(post=>post.filter((item)=>item.userId===Number(e)))
            if(post.length===0){
                ApiGet.get().then(resp=>setPost(resp.data))  
            }

        }else{
            console.log('hi');
            ApiGet.get().then(resp=>setPost(resp.data))
        }
    }
  return (
    <div>
        <Input1 handleInp={handleInp}/>
        <Input2 handleInp2={handleInp2}/>
        {post?.map(item=><Post key={item.id} item={item}/>)}
    </div>
  )
}

export default Poisks