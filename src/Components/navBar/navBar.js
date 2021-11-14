import './navBar.css';
import {useState} from 'react';

const NavBar = () => {
  //States
  const [navBarStatus,setNavaBarStatus] = useState(true);
  const [search,setSearch] = useState("");

  //Functions for handling
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }





  //The Page
  return (
    <div className="NavBar">
      <div className="BrandSearch">
        <h1 className="BrandName">Meddit</h1>
        <div className="Search">
          <input type="text" placeholder="Search..." value={search} onChange={handleSearch}/>
          <input type="button" value="🔎"/>
        </div>
      </div>
      <div className="profile-edit">
        <img src={sessionStorage.getItem("PfPath")} className="pfp"/>
      </div>
      <br/>
      <hr/>
      <div className="humburger" id="humburger" onClick={handleBurgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id='nav'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What's new</a></li>
            <li><a href="#">Logout</a></li>
           

          </ul>
      </nav>
    </div>
  )
}

export default NavBar;
