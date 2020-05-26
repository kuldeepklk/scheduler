import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link, Redirect } from "react-router-dom";
import PickyDateTime from "react-picky-date-time";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class Schedule2 extends Form {
  state = {
    data: { first_name: "", last_name: "" },
    date: null,
    time: null,
    time2: null,
    startDate: new Date(),
    errors: {},
  };
  schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
  };
  onDatePicked = (val) => {
    this.setState({ date: val });
    alert(JSON.stringify(val));
  };
  onTimePicked = (val) => {
    this.setState({ time: val });
  };
  handleBack = () => {
    if (this.state.time) {
      this.setState({ time: null });
    }else{
      this.props.history.replace("/schedule");
    }
  };
  handleChange = (date) => {
    this.setState({
      startDate: date,
      date: moment(date).format("dddd, MMMM Do, YYYY"),
      time: moment(date).format("h:mm a"),
      time2: moment(date).add(30, "minute").format("h:mm a"),
    });
  };
  renderForm = () => {
    if (this.state.time)
      return (
        <div className="col-md-6">
          <form>
            {this.renderInput("first_name", "First Name")}
            {this.renderInput("last_name", "Last Name")}
            {this.renderInput("email", "Email")}
            {this.renderButton("Submit")}
          </form>
        </div>
      );
  };
  
  renderCalendar = () => {
    if (!this.state.time)
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          inline
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 0), 19)}
          includeDates={[
            new Date("2020-05-25"),
            new Date("2020-05-27"),
            new Date("2020-05-28"),
          ]}
          highlightDates={[
            new Date("2020-05-25"),
            new Date("2020-05-27"),
            new Date("2020-05-28"),
          ]}
        />
      );
  };
  render() {
    return (
      <div>
        <section>
          <div class="maindiv">
            <div class="row">
              <div class="container mainsec">
                <h3>Schedule Appointment</h3>
                <div>
                  <ul class="nav" role="tablist"></ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginTop: 40 }}>
          <div class="container">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="tab1">
                <div className="row">
                  <div className="col-md-3">
                    <button className="btn" onClick={this.handleBack}>
                      <svg
                        class="bi bi-arrow-left-circle"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                        />
                      </svg>{" "}
                      Back
                    </button>
                    <h4>John Deo</h4>
                    <h3>Demo Call</h3>
                    <h4>
                      <svg
                        class="bi bi-clock-fill"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                        />
                      </svg>{" "}
                      30 min
                    </h4>
                    {this.state.date && (
                      <h6>
                        <svg
                          class="bi bi-calendar"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>{" "}
                        {this.state.time} - {this.state.time2} {this.state.date}
                      </h6>
                    )}
                  </div>
                  <div className="col-md-9">
                    {this.renderCalendar()}
                    {this.renderForm()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Schedule2;
