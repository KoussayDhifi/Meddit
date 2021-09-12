import './navBar.css';
import {useState} from 'react';

const NavBar = () => {
  const [navBarStatus,setNavaBarStatus] = useState(false);

  const handleBurgerClick = () => {
    if (navBarStatus)
    {
      setNavaBarStatus(false);
      document.getElementById('nav').style.display='none';
    }else {
      setNavaBarStatus(true);
      document.getElementById('nav').style.display='block';
    }
  }

  return (
    <div className="NavBar">
      <h1 className="BrandName">Meddit</h1>
      <div className="humburger" id="humburger" onClick={handleBurgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id='nav'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What's new</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>

          </ul>
      </nav>
    </div>
  )
}

export default NavBar;
