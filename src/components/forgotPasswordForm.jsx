import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class ForgotPasswordForm extends Form {
  state = {
    data: { email: "" },
    errors: {},
    msg:null,
  };

  schema = {
    email: Joi.string().required().label("Email")  };

  doSubmit = async () => {
        window.location =  "/changePassword";
     
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
            <h3>Reset Password</h3>
            {this.state.msg && (<div className="alert alert-danger">{this.state.msg}</div>)}
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderButton("Reset Password")}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ForgotPasswordForm;
