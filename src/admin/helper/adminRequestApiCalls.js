import { API } from "../../backend";

//getting all the services in pending pannel
export const getAllServices = () => {
  return fetch(`${API}/services`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//deleting the service request made by user
export const deleteService = (serviceId, userId, token) => {
  return fetch(`${API}/service/delete/${serviceId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//get all records saved in the admin db
export const getAllRecords = () => {
  return fetch(`${API}/services/record`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//deletion of admin record
export const deleteRecord = (recordId, userId, token) => {
  return fetch(`${API}/service/record/delete/${recordId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
