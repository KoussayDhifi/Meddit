import {Route,Redirect} from 'react-router-dom';

const ProtectedRoute = (props) => {
    let token = sessionStorage.getItem("at");
    console.log(token)
    if (token === null)
    {
        let token = localStorage.getItem("at");
        console.log(token)
        if (token === null)
        {
            return (<Redirect to="/login"/>);
        }else
        {
            return (<Route {...props}/>)
        }
    }else
    {
        <Route {...props} />
    }


}

export default ProtectedRoute;