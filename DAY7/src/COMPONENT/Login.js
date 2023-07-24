import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPass, setCheckPass,setName } from './store1';
import './login.css';
function Login({
  pass,
  checkpass,
  name,
  setName,
  setPass,
  setCheckPass,
}) {
  const check = (e) => {
    e.preventDefault();
    if (pass === 'anu@123') {
      setCheckPass(true);
    }
  };

  return (
    <div className="logmain">
      <div className="login">
        <form onSubmit={check}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="logbut">Login</button>
          {checkpass && alert('successful login.'+name)}

          {/* {checkpass && navigate('/home')} */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h5>Don't have an account? Register</h5>
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pass: state.login.pass,
    name:state.login.name,
    checkpass: state.login.checkpass,
  };
};

const mapDispatchToProps = {
  setPass,
  setName,
  setCheckPass,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);