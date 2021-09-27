import './login.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {

    //States
    const [EmailField,setEmailField] = useState('')
    const [PasswordField,setPasswordField] = useState('')


    //Functions for handling

    const handleEmailField = (e) => {
      setEmailField(e.target.value);
    }

    const handlePasswordField = (e) => {
      setPasswordField(e.target.value);
    }
      return (
        <div className="Login">
          <form>
            <div className="title">
              <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
            </div>
            <br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" className="email" required value={EmailField} onChange={handleEmailField}/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" className="password" required value={PasswordField} onChange={handlePasswordField}/><img src="/eye/view.png" className="eye"/><br/>
            <input type="checkbox" id="remember" className="remember"/><label class="rememberlabel" for="remember"><p>Remember Me</p></label>
            <br/>
            <input type="submit" value="Login!"/>
          </form>
        </div>
      )




}

export default Login;
