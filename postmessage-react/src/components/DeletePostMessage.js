import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { deletePostMessage } from './utils/api'
import { useHistory } from 'react-router-dom';

/**
* @author
* @function DeletePostMessage
**/

const DeletePostMessage = (props) => {

  const history = useHistory()
  const match = useRouteMatch()

  useEffect(()=>{
    const deletePost = async ()=>{
      await deletePostMessage(match.params.id)
    }
    deletePost()
    history.push('/postmessage/')
  },[])

  return(
    <div>...Loading</div>
   )

 }

export default DeletePostMessage