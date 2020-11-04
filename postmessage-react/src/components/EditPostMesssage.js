import React, { useState, useEffect } from 'react'
import PostMessageForm from './PostMessageForm'
import { useRouteMatch } from 'react-router-dom'
import { getSinglePost, editPostMessage } from './utils/api'
/**
* @author
* @function EditMessageForm
**/
const EditMessageForm = (props) => {
  // console.log(props)

  const match = useRouteMatch()
  
  const [ postMessage, setPostMessage ] = useState()

  useEffect(()=>{
    const fetchPost = async () => {

      const singlePost = await getSinglePost(match.params.id)
      const [{ title, message}] = singlePost
      setPostMessage({
        title,
        message
      })
    }
    fetchPost()
  },[])
  const onSubmit =  async (data)=>{
    await editPostMessage(data, match.params.id)
  }

  return( 
      postMessage ? 
      <div>
        <h1 className="text-center text-secondary">
        Edit Message
      </h1>
        <PostMessageForm postMessage={postMessage} onSubmit={onSubmit}/>
      </div>
      : <div>Loading...</div>
  )

}

export default EditMessageForm