import React from 'react'
import { Form, Button }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
/**
* @author
* @function PostMessageForm
**/

const PostMessageForm = ({ postMessage, onSubmit}) => {

  // console.log(postMessage)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: postMessage ? postMessage.title : "",
      message: postMessage ? postMessage.message : ""
    }
  })
  const history = useHistory()

  const submitHandler =  handleSubmit((data)=>{
    onSubmit(data)
    alert(JSON.stringify(data))
    history.push('/postmessage/')
  })


  return(
   
      
    <Form onSubmit={submitHandler} style={{width: '500px', margin: 'auto'}}>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control ref={register} type="text" name="title" placeholder="Enter Title" />
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control ref={register} as="textarea" name="message" placeholder="Enter Message" rows={3} />
        </Form.Group>
        
        <Button variant="info" type="submit">Save Message</Button> 

      </Form>
  
    
   )

 }

export default PostMessageForm