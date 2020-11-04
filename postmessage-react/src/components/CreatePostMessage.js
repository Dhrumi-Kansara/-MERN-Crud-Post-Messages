import React from 'react'
import PostMessageForm from './PostMessageForm'
import { createPostMessages } from './utils/api'
/**
* @author
* @function CreatePostMessage
**/

const CreatePostMessage = (props) => {

  const onSubmit =  async (data)=>{
    
    await createPostMessages(data)
  }

  return( 

    <div>
      <h1 className="text-center text-secondary">
        Add Message
      </h1>
      
      <PostMessageForm postMessage={{}} onSubmit={onSubmit}/>
  

    </div>

  )

}

export default CreatePostMessage