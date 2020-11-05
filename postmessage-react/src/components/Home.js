import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {
  const history = useHistory()
  useEffect(()=>{
    //redirecting to /postmessage route
    history.push('/postmessage/')
  },[])

  return(
    <div>Loading....</div>
   )

 }

export default Home