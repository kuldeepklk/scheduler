import React, { Component } from "react";
import { Link } from "react-router-dom";
import {getEventTypes} from "../services/eventTypeService"

class Schedule extends Component {

  state = {
    event_types: [],
    };
    async componentDidMount() {
      const user_id = localStorage.getItem("user_id");
      const { data } = await getEventTypes(user_id);
      //alert(JSON.stringify(data));
      this.setState({ event_types:data });
    }
render(){
  return (
    <div>
      <section style={{ marginTop: 40 }}>
        <div class="container">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="tab2">
              <div class="container">
                <h4 style={{ textAlign: "center" }}>John Deo</h4>
                <p class="para" style={{ textAlign: "center" }}>
                  Welcome to my schedule page, Please follwo the instruction to
                  add an event to my calender.
                </p>
                <div class="">
                  <div>
                    <ul class="list-group">
                    {this.state.event_types.map((item)=>{ 
                      return (
                      <li class="list-group-item">
                        <Link to="/schedule2">
                        <span className="badge" style={{float:"right"}}>
                          <svg
                            class="bi bi-caret-right-fill"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
                        </span></Link>
                        {item.event_type}<br></br>{item.duration} min
                      </li>)})}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
};

export default Schedule;
