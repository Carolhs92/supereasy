import './assets/css/App.css';
import logo from './assets/images/logoBlanco.png';
import './assets/css/login.css';
import GoogleLogin from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";




//Importar componentes
import Login from './components/Login';
import Loginemail from './components/login-email';

export default function App() {

  const respuestaGoogle=(respuesta)=> {
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked=() =>{
    alert('Event onclick');
  }

  return (
    <Router>
    <div className="App">
        <div>
         
          <Route exact path="/login-email" component={Loginemail} />
          
          </div>
       
      <header className="App-header">

      </header>

      <div className="fondo">

        <a href="/" className="standard-logo">
          <img src={logo} alt="logo" />
        </a>

      
        <div className="container">
            <Login/>
            <GoogleLogin
              clientId="125794910617-5lh94b4hreujhepsqo8vfebthu0gthd5.apps.googleusercontent.com"
              
              buttonText="Iniciar sesión"
              onSuccess={respuestaGoogle}
              onFailure={respuestaGoogle}
              cookiePolicy={'single_host_origin'}

              render={renderProps => (
                <button onClick={renderProps.onClick} className="sesion-google">Google</button>
              )}
            />
            <FacebookLogin
              appId="361455622238798"
              
              /*autoLoad={true}*/
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook} 

              render={renderProps => (
              <button onClick={renderProps.onClick} className="sesion-facebook">Facebook</button>
              )}
            />
            <Link to="/login-email">
              <button className="sesion-email">
                Email
              </button>
            </Link>
        </div>

      </div>
    </div>
    </Router>
  );
}