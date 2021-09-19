import './register.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';

const Register = () => {
  //states
  const [style,setStyle] = useState({display:'none'})
  const [checkedDefault,setCheckedDefault] = useState('checked')
  const [checkedUpload,setCheckedUpload] = useState('')

  //Functions for handling
  const handleChangeRadio = () => {
    if (document.getElementById("upload").checked)
    {
      setStyle({display:'flex'})
      setCheckedUpload('checked')
      setCheckedDefault('')

    }else if (document.getElementById("default").checked)
    {
        setStyle({display:'none'})
        setCheckedUpload('')
        setCheckedDefault('checked')

    }
  }

  return(
    <div className="Register">
      <form>
        <div className="title">
          <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
        </div>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" className="name" placeHolder="Name"/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" className="email" placeHolder="Email"/><br/>
        <label for="p1">Passowrd:</label><br/>
        <input type="password" id="p1" className="p1" placeHolder="Password"/><br/>
        <label for="p2">Confirm Password:</label><br/>
        <input type="password" id="p2" className="p2" placeHolder="Confirm Password"/><br/>
        <label for="date">Date of birth:</label><br/>
        <input type="date" id="date" className="date"/><br/>
        <label for="date">Profile Pic:</label><br/>
        <img src="/Pfps/default.jpg"/><br/>
        <input type="radio" id="default" name='pfp' checked={checkedDefault} onChange={handleChangeRadio}  /><label class="default" for="default"><p>Default</p></label>
        <input type="radio" id="upload" name='pfp' checked={checkedUpload} onChange={handleChangeRadio}/><label class="upload" for="upload"><p>Upload</p></label><br/>
        <input type="file" id="file" style={style}/><br/>
        <input type="submit" value="Create an account!"/>


      </form>
    </div>
  )
}

export default Register
