import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class ChangePasswordForm extends Form {
  state = {
    data: { email: "", password: "", newpassword:"" },
    errors: {},
    msg:null,
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
    newpassword: Joi.string().required().label("New Password"),
  };

  doSubmit = async () => {
    window.location =  "/login";
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
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "New Password", "password")}
              {this.renderInput("newpassword", "Re-Enter Password", "password")}
              {this.renderButton("Change Password")}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ChangePasswordForm;
