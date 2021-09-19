import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {
      return (
        <div className="Login">
          <form>
            <div className="title">
              <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
            </div>
            <br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" className="email" required/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" className="password" required/><br/>
            <input type="checkbox" id="remember" className="remember"/><label class="rememberlabel" for="remember"><p>Remember Me</p></label>
            <br/>
            <input type="submit" value="Login!"/>
          </form>
        </div>
      )




}

export default Login;
