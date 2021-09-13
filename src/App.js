import NavBar from './Components/navBar/navBar.js'
import Login from './Components/Authentication/login.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login}/>
      </Router>

    </div>
  );
}

export default App;
