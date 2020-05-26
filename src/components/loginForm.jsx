import React from "react";
import { Redirect, Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    msg:null,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
     const user_data = await auth.login(data.username, data.password);
      if(user_data.id){
        window.location =  "/event";
      }else{
        this.setState({msg:user_data.msg})
      }
      
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    //if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <section style={{ paddingTop: 50 }}>
        <div
          class="maindiv"
          style={{ padding: 50, width: "50%", margin: "auto" }}
        >
          <div class="row">
            <h1>Login</h1>
            {this.state.msg && (<div className="alert alert-danger">{this.state.msg}</div>)}
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
              <Link style={{float:"right"}} to="/forgotPassword">Forgot Password</Link>
            </form>
            
            
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
