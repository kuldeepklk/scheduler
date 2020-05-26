import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Appointment from "./components/appointment";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Event from "./components/event";
import EventForm from "./components/eventForm";
import Schedule2 from "./components/schedule2";
import Schedule from "./components/schedule";
import ForgotPasswordForm from "./components/forgotPasswordForm";
import ChangePasswordForm from "./components/changePasswordForm";
import PastAppointment from "./components/pastappointment";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/changePassword" component={ChangePasswordForm} />
            <Route path="/forgotPassword" component={ForgotPasswordForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/appointment" component={Appointment} />
            
            <ProtectedRoute path="/event/:id" component={EventForm} />
            <ProtectedRoute path="/event" component={Event} />
            
            <Route path="/schedule" component={Schedule} />
            <Route path="/schedule2" component={Schedule2} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
