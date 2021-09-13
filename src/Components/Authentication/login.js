import './login.css'

const Login = () => {
      return (
        <div className="Login">
          <form>
            <div className="title">
              <h1><a href="/login">Login</a>|<a href="/register">Register</a></h1>
            </div>
            <br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" className="email"/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" className="password"/><br/>
            <input type="checkbox" id="remember" className="remember"/><label class="rememberlabel" for="remember"><p>Remember Me</p></label>
            <br/>
            <input type="submit" value="Login!"/>
          </form>
        </div>
      )




}

export default Login;
