import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

axios.get('http://localhost:3001/').catch(function(error){console.log(error);});

class App extends Component {
  render() {
    return (
      <div className="App">
        <form action="http://localhost:3001/routes/api/login" method="post">  
       <label> Username <input type="text" name="username"/></label>
        <label> Password <input type="password" name="password"/></label>
        <button type="submit">Login</button>
    </form> 
     
          <p> </p>
          <label>New Username:</label>
          <input type="text" name="username"/>
      
          <label>New Password:</label>
          <input type="password" name="password"/>
          <button type="submit" > Register </button>
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
      </div>
    );
  }
  
}

export default App;