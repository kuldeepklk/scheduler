import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import appointment from "../services/appointment";
import PastAppointment from "./pastappointment";
import UpcommingAppointment from "./upcommingAppointment";

const Appointment = () => {
  return (
    <div>
      <section>
        <div class="maindiv">
          <div class="row">
            <div class="container mainsec">
              <h3>
                My Schedule <i class="fa fa-angle-down" aria-hidden="true"></i>
              </h3>
              <div>
                <ul class="nav" role="tablist">
                  <li role="presentation">
                    <Link to="/event" aria-controls="tab2">
                      Event Types
                    </Link>
                  </li>
                  <li role="presentation" class="active">
                    <Link to="appointment" aria-controls="tab2">
                      Schedule Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: 40 }}>
        <div class="container">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="tab2">
              <div class="container">
                <p class="para">Display 3 of 3 events </p>
                <div class=" eventwraper">
                  <div>
                    <ul class="nav navtable" role="tablist">
                      <li role="presentation" class="active">
                      <Link
                          to="/appointment/upcoming"
                          aria-controls="tab4"
                          role="tab"
                          data-toggle="tab"
                        >
                          Upcoming
                        </Link>
                      </li>
                      <li role="presentation">
                        <Link
                          to="/appointment/past"
                          aria-controls="tab4"
                          role="tab"
                          data-toggle="tab"
                        >
                          Past
                        </Link>
                      </li>
                    </ul>
                    <Switch>
                    <Route path="/appointment/past" component={PastAppointment} />
                    <Route path="/appointment/upcoming" component={UpcommingAppointment} />
                    <Redirect from="/appointment" exact to="/appointment/upcoming" />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
