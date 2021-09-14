import './register.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';

const Register = () => {
  return(
    <div className="Register">
      <form>
        <div className="title">
          <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
        </div>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" className="name"/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" className="email"/><br/>
        <label for="p1">Passowrd:</label><br/>
        <input type="password" id="p1" className="p1"/><br/>
        <label for="p2">Confirm Password:</label><br/>
        <input type="password" id="p2" className="p2"/><br/>
        <label for="date">Date of birth:</label><br/>
        <input type="date" id="date" className="date"/><br/>
        <label for="date">Profile Pic:</label><br/>
        <img src="/Pfps/default.jpg"/><br/>
        <input type="radio" id="default" name='pfp' checked/><label class="default" for="default"><p>Default</p></label>
        <input type="radio" id="upload" name='pfp'/><label class="upload" for="upload"><p>Upload</p></label>
        <input type="file"/>


      </form>
    </div>
  )
}

export default Register
