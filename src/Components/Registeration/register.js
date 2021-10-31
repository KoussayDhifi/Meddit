import './register.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import { useHistory } from "react-router-dom";

const Register = () => {
  //states
  const [style,setStyle] = useState({display:'none'})
  const [checkedDefault,setCheckedDefault] = useState('checked')
  const [checkedUpload,setCheckedUpload] = useState('')
  const [nameField,setNameField] = useState('')
  const [emailField,setEmailField] = useState('')
  const [passwordField,setPasswordField] = useState('')
  const [conPasswordField,setConPasswordField] = useState('')
  const [dateField,setDateField] = useState("yyyy-mm-dd")
  const [eyeSrc,setEyeSrc] = useState('/eye/view.png')
  const [seePassword,setSeePassword] = useState(false)
  const [passwordType,setPasswordType] = useState('password')
  const [pfpPath,setPfpPath] = useState("/Pfps/default.jpg")
  const [pfp,SetPfp] = useState();
  const [msg,setMsg] = useState("");
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
        SetPfp()

    }
  }

  const handleNameChange = (e) => {
    setNameField(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmailField(e.target.value);
  }

  const handlePasswordField = (e) => {
  	setPasswordField(e.target.value);
  }

  const handleConPasswordField = (e) => {
 
	setConPasswordField(e.target.value);
  }

  const handleDateField = (e) => {
    setDateField(e.target.value);
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

  const handlePfpChange = (e) => {
    SetPfp(e.target.files[0]);
  }

  


  //history
  let history = useHistory();
  //Calling API

  const Create_account = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('name',nameField)
    formData.append('email',emailField)
    formData.append('password1',passwordField)
    formData.append('password2',conPasswordField)
    formData.append('pfp',pfp)
    formData.append('date',dateField)
    setNameField("")
    setEmailField("")
    setPasswordField("")
    setConPasswordField("")
    fetch("/create_account",{
    method:'POST',
    body:formData
  }).then(res=>res.json()).then(data=>{setMsg(data.Done)
    })
  }





  return(
    <div className="Register">
      <form onSubmit={Create_account}>
        <div className="title">
          <h1><Link to="/login"><a>Login</a></Link>|<Link to="/register"><a>Register</a></Link></h1>
        </div>
        <small>{msg}</small><br/>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" className="name" placeHolder="Name" value={nameField} onChange={handleNameChange} required/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" className="email" placeHolder="Email" value={emailField} onChange={handleEmailChange} required/><br/>
        <label for="p1">Passowrd:</label><br/>
        <input type={passwordType} id="p1" className="p1" placeHolder="Password" value={passwordField} onInput={handlePasswordField} required/><img src={eyeSrc}  className="eyereg" /><br/>
        <label for="p2">Confirm Password:</label><br/>
        <input type={passwordType} id="p2" className="p2" placeHolder="Confirm Password" value={conPasswordField} onInput={handleConPasswordField} required  /><br/>
        <label for="date">Date of birth:</label><br/>
        <input type="date" id="date" className="date" value={dateField} onChange={handleDateField} required/><br/>
        <label for="date">Profile Pic:</label><br/>
        <img src="/Pfps/default.jpg"/><br/>
        <input type="radio" id="default" name='pfp' checked={checkedDefault} onChange={handleChangeRadio}  /><label class="default" for="default"><p>Default</p></label>
        <input type="radio" id="upload" name='pfp' checked={checkedUpload} onChange={handleChangeRadio}/><label class="upload" for="upload"><p>Upload</p></label><br/>
        <input type="file" id="file" style={style} onChange = {handlePfpChange}/><br/>
        <input type="submit" value="Create an account!"/>


      </form>
    </div>
  )
}

export default Register
