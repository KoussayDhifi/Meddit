import './login.css'
import {Link,useHistory} from 'react-router-dom'
import {useState} from 'react'


const Login = () => {

    //Hooks
    const [EmailField,setEmailField] = useState('')
    const [PasswordField,setPasswordField] = useState('')
    const [seePassword,setSeePassword] = useState(false)
    const [passwordType,setPasswordType] = useState('password')
    const [eyeSrc,setEyeSrc] = useState('/eye/view.png')
    const [rememberMe,setRememberMe] = useState(false)
    const [msg,setMsg] = useState("")
    const history = useHistory()
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
	}).then(res=>res.json()).then(data => {setMsg(data.Done)
	if (rememberMe)
		{
	localStorage.setItem("at",data.access_token)
	localStorage.setItem("username",data.name)
	localStorage.setItem("PfPath",data.pfp)
	localStorage.setItem("isVer",data.isVerified)
	}else
		{
			sessionStorage.setItem("at",data.access_token)
			sessionStorage.setItem("username",data.name)
        		sessionStorage.setItem("PfPath",data.pfp)
			sessionStorage.setItem("isVer",data.isVerified)
		}
	if ((localStorage.getItem("at")!== null) || (sessionStorage.getItem("at") !== null))
		{	try{
			history.push("/")
			}catch(err)
			{
				console.error(err)
			}
		}
	
	}
	)


    }
      return (
        <div className="Login">
          <form onSubmit={log_in}>
            <div className="title">
              <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
            </div>
	      <small>{msg}</small>
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
