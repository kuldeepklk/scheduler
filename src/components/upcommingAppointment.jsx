import React from "react";
import { Link } from "react-router-dom";
import appointment from "../services/appointment";

const UpcommingAppointment = () => {
  return (
    <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="tab3">
                        <table
                          class="eventtable"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <th width="300">Thursday, 23 April 2020</th>
                            <th>&nbsp;</th>
                          </tr>
                          <tr>
                            <td>
                              <span class="eventdot"> </span> 09:45am - 10:15am
                            </td>
                            <td>
                              <strong>Rupert Grint</strong> <br></br>
                              Event Type <strong>Demo call</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span class="eventdot"> </span> 11:30am - 12:00pm
                            </td>
                            <td>
                              <strong>Emma Granger</strong> <br></br>
                              Event Type <strong>Account review</strong>
                            </td>
                          </tr>
                        </table>
                        <table
                          class="eventtable"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <th width="300">Friday, 24 April 2020</th>
                            <th>&nbsp;</th>
                          </tr>
                          <tr>
                            <td>
                              <span class="eventdot"> </span> 09:30am - 10:00am
                            </td>
                            <td>
                              <strong>Carios Patel</strong> <br></br>
                              Event Type <strong>Demo call</strong>
                            </td>
                          </tr>
                        </table>
                        <p class="para">Youh'v reached the end of the list </p>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="tab4">
                        <table
                          class="eventtable"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <th width="300"> Monday, 13 April 2020</th>
                            <th>&nbsp;</th>
                          </tr>
                          <tr>
                            <td>
                              <span class="eventdot"> </span> 09:45am - 10:15am
                            </td>
                            <td>
                              <strong>Angel Shaw</strong> <br></br>
                              Event Type <strong>Account call</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span class="eventdot"> </span> 11:30am - 12:00pm
                            </td>
                            <td>
                              <strong>Cristin Mill</strong> <br></br>
                              Event Type <strong>Demo review</strong>
                            </td>
                          </tr>
                        </table>
                        <table
                          class="eventtable"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <th width="300"> Tuesday, 14 April 2020</th>
                            <th>&nbsp;</th>
                          </tr>
                          <tr>
                            <td>
                              <span class="eventdot"> </span> 09:30am - 10:00am
                            </td>
                            <td>
                              <strong>Pol Symens</strong> <br></br>
                              Event Type <strong>Demo call</strong>
                            </td>
                          </tr>
                        </table>
                        <p class="para" style={{ textAlign: "center" }}>
                          Youh'v reached the end of the list{" "}
                        </p>
                      </div>
                    </div>
  );
};

export default UpcommingAppointment;
