import React from 'react';
import PostMessages from './components/PostMessages';
import CreatePostMessage from './components/CreatePostMessage';
import EditPostMessage from './components/EditPostMesssage';
import DeletePostMessage from './components/DeletePostMessage';
import Home from './components/Home';
import Navigation from './components/UI/Nav'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container }  from 'react-bootstrap'

function App() {
  return (
    <div>
        <Router>
            <Navigation />
            <Switch>
            <Container>
            
              <Route path='/postmessage'  exact component={PostMessages}/>
              <Route path='/postmessage/insert' exact component={CreatePostMessage}/> 
              <Route path='/postmessage/edit/:id' exact component={EditPostMessage}/> 
              <Route path='/postmessage/delete/:id' exact component={DeletePostMessage}/> 
              <Route path='/'  exact component={Home}/>
            </Container>
            </Switch>       
        </Router> 
    </div>
  );
}

export default App;
