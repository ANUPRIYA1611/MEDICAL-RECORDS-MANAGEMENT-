import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';   
function Login(){
    return(
        <div className="loginbody">
        <div className="loginmain">
        <div className="loginone">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="text" name="name" placeholder="Patient name" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <div>
                <Link to='/home'>
                    <button>Login</button>
                </Link>
            </div>
            <br></br>
            <p className="loginp">Don't have an account?<Link to='/signup'>Sign up</Link></p>
          </form>
        </div>
        </div>
        </div>
    );
}
export default Login;