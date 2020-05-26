import React, { Component } from "react";
import { Link } from "react-router-dom";
import {getEventTypes} from "../services/eventTypeService"
class Event extends Component  {
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
      <section>
        <div class="maindiv">
          <div class="row">
            <div class="container mainsec">
              <h3>
                My Schedule <i class="fa fa-angle-down" aria-hidden="true"></i>
              </h3>
              <div>
                <ul class="nav" role="tablist">
                  <li role="presentation" class="active">
                    <Link to="event" aria-controls="tab2">
                      Event Types
                    </Link>
                  </li>
                  <li role="presentation">
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
            <div role="tabpanel" class="tab-pane active" id="tab1">
              <div>
                <div class="row">
                  <div class="col-xs-6">
                    <span> My Link </span>
                    <br></br>
  <Link to="/schedule">{window.location.hostname}/schedule</Link>
                  </div>
                  <div class="col-xs-6" style={{ textAlign: "right" }}>
                    <Link class="btn " to="/event/new">
                      + New Event Type
                    </Link>
                  </div>
                  <div class="col-xs-12">
                    <hr></hr>
                  </div>
                  {this.state.event_types.map((item)=>{
                   return (<div class="col-sm-4">
                    <div class="featurebox">
                      <div class="featurebox_1">
                        <h4>{item.event_type}</h4>
                        <span>{item.duration} min</span>
                      </div>
                      <Link to={"/event/"+item.id}> Edit</Link>
                    </div>
                  </div>)
                  })}
                  
                  
                  
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

export default Event;
