import {Component,React} from 'react';
import './registration.css';
import {Link} from "react-router-dom";
class Registration extends Component{
  constructor() {
    super();
    this.state = { 
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);   
    this.RegistrationForm = this.RegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  RegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter a valid mobile no.";
      }
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*_=+-]).{8,}$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }
  render(){
    return(
      <div className="loginbody">
        <div className="main">  	
        
        <div className="signup">
          <form onSubmit="signup1">
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="Patient name" required />
            <input type="number" name="phonenum" placeholder="Contact number" value={this.state.fields.phonenum} onChange={this.handleChange} required />
            <select className="option">
              <option style={{color:"#e0dede"}}>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="date" name="dob" placeholder="Date of birth" required />
            <select className="option">
              <option style={{color:"black"}}>Insurance</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input type="password" name="pswd" placeholder="Password" value={this.state.fields.password} onChange={this.handleChange} required />
            <div>
              <Link to='/'>
                <button>Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
    }
}
export default Registration;