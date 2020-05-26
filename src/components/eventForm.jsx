import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";
import { getEventType,saveEventType } from "../services/eventTypeService";

class EventForm extends Form {
  
  state = {
    data: { event_type: "", duration: ""  },
    msg:null,
    errors: {},
  };

  schema = {
    event_type: Joi.string().required().label("Event Name"),
    duration: Joi.string().required().label("Duration"),
  };
  async componentDidMount() {
    await this.populateEvent();
  }
  async populateEvent() {
    try {
      const eventId = this.props.match.params.id;
      if (eventId === "new") return;

      const { data } = await getEventType(eventId);
      //alert(JSON.stringify(data))
      this.setState({ data: this.mapToViewModel(data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  mapToViewModel(eventType) {
    return {
      event_type: eventType.event_type,
      duration: eventType.duration
    };
  }
  doSubmit = async () => {
    const { data } = this.state;
    const user_id = localStorage.getItem("user_id");
    const eventId = this.props.match.params.id;
    const postData = {
      id: eventId,
      user_id:user_id,
      event_type: data.event_type,
      duration: data.duration
    }
    //alert(JSON.stringify(postData));
    const {data:res} = await saveEventType(postData);
    //alert(JSON.stringify(res));
    if(res.status == 'success'){
      this.props.history.push("/event");
    }else{
      this.setState({msg:res.msg})
    }
  };


  render() {
    return (
      <div>
        <section>
          <div class="maindiv">
            <div class="row">
              <div class="container mainsec">
                <h3>Add Event Types</h3>
                <div>
                  <ul class="nav" role="tablist">
                    <li role="presentation" class="active">
                      <Link to="/event" aria-controls="tab2">
                        Back
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
                <div className="row">
                  <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                      {this.renderInput("event_type", "Event Name")}
                      {this.renderSelect("duration", "Event Duration", [
                        { _id: 15, name: "15 min" },
                        { _id: 30, name: "30 min" },
                        { _id: 60, name: "60 min" },
                        { _id: 0, name: "Other" },
                      ])}
                      {/*this.state.data.duration == "0" &&
                        this.renderInput("other_duration", "Other Duration */}
                      {this.renderButton("Submit")}
                    </form>
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

export default EventForm;
