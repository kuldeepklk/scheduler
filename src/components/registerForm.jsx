import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      //alert(JSON.stringify(response));
      //auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <section style={{ paddingTop: 50 }}>
        <div
          class="maindiv"
          style={{ padding: 50, width: "50%", margin: "auto" }}
        >
          <div class="row">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Full Name")}
              {this.renderInput("username", "Email")}
              {this.renderInput("password", "Password", "password")}

              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterForm;
