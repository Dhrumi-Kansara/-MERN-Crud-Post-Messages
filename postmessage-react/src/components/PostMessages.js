
import React, {useState, useEffect} from 'react'
import {Container, Row, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { getPostMessages } from './utils/api'

/**
* @author
* @function PostMessages
**/

const PostMessages = (props) => {

  const [ notEmpty, setNotEmpty ] = useState(true)
  const [ postMessages, setPostMessage ] = useState([])

  useEffect(()=>{

    const fetchPostMessages = async () => {
      const messages = await getPostMessages()
      if(messages.length===0) setNotEmpty(false)
      setPostMessage(messages)
    }
    fetchPostMessages()
    
  },[])
  
  function iterateMessages(postMessage) {
    
              
    return (
      <Card.Body style={{border: '1px #D3D3D3 solid', marginTop: '1rem'}}>
        <Card.Title>{postMessage.title}</Card.Title>
        <Card.Text>
          {postMessage.message}
        </Card.Text>
        <Link  className="badge badge-light" to={`/postmessage/edit/${postMessage._id}`} >Edit</Link>

        <Link className="badge badge-info" style={{marginLeft: '5px'}} to={`/postmessage/delete/${postMessage._id}`} >Delete</Link>
        
    </Card.Body>
    );
  }

  function noMessage() {
    console.log('hello')
    return (
      <div class="alert alert-secondary text-center" style={{marginTop: '4rem'}} role="alert">
        <p style={{fontSize: '1.5rem'}}>No messages here</p>
      </div>
    )
  }
  return(
    <div>
    <h1 className="text-center text-secondary">All Messages</h1>
      <Container>
        <Row>
        <Card style={{ width: '40rem' , margin: 'auto', border: 'none'}}>
        {notEmpty?postMessages.map(iterateMessages):noMessage()}
        </Card>
        
        </Row>
      </Container>
    </div>
  )

}

export default PostMessages