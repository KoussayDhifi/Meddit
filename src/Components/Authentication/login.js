import './login.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {

    //States
    const [EmailField,setEmailField] = useState('')
    const [PasswordField,setPasswordField] = useState('')
    const [seePassword,setSeePassword] = useState(false)
    const [passwordType,setPasswordType] = useState('password')
    const [eyeSrc,setEyeSrc] = useState('/eye/view.png')
    const [rememberMe,setRememberMe] = useState(false)
    //Functions for handling

    const handleEmailField = (e) => {
      setEmailField(e.target.value);
    }

    const handlePasswordField = (e) => {
      setPasswordField(e.target.value);
    }

    const handlePasswordSee = () => {
      if (seePassword)
      {
        setSeePassword(false)
        setPasswordType('password')
        setEyeSrc('/eye/view.png')
      }else if (seePassword == false)
      {
        setSeePassword(true)
        setPasswordType('text')
        setEyeSrc('/eye/visibility.png')
      }
    }
    
    const remember = (e) => {
	if (e.target.checked)
	    {
		setRememberMe(true)
	    }else if (e.target.checked == false)
	    {
		setRememberMe(false)
	    }
	
    }
    
    const log_in = (e) => {
	e.preventDefault()
	fetch("/login",{
	method:"post",
	body:JSON.stringify({
	"email":EmailField,
	"password":PasswordField,
	"remember":rememberMe
	})
	}).then(res=>res.json()).then(data => console.log(data))


    }
      return (
        <div className="Login">
          <form onSubmit={log_in}>
            <div className="title">
              <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
            </div>
            <br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" className="email" required value={EmailField} placeHolder="Email" onChange={handleEmailField}/><br/>
            <label for="password">Password:</label><br/>
            <input type={passwordType} id="password" className="password" required value={PasswordField} placeHolder="Password" onChange={handlePasswordField}/><img src={eyeSrc} className="eyelog" onClick = {handlePasswordSee}/><br/>
            <input type="checkbox" id="remember" className="remember" onClick={remember} /><label class="rememberlabel" for="remember"><p>Remember Me</p></label>
            <br/>
            <button type="submit"  >Login!</button>
          </form>
        </div>
      )




}

export default Login;
