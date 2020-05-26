import http from "./httpService";
import { apiUrl } from "../config.json";
import _ from "lodash";

const apiEndpoint = apiUrl + "/event_type";

function eventUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getEventTypes(user_id) {
  return http.get(eventUrl(user_id));
}
export function getEventType(id){
    return http.get(apiEndpoint+'ById'+"/"+id);
}
export function saveEventType(data){
    if (data.id) {
        const body = { ...data };
        return http.post(eventUrl(data.id), body);
      }
      return http.post(apiEndpoint, data);
}