import NavBar from './Components/navBar/navBar.js'
import Login from './Components/Authentication/login.js'
import Register from './Components/Registeration/register.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Router>

    </div>
  );
}

export default App;
