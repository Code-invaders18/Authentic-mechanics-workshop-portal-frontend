import { API } from "../../backend";

export const createRecord = (userId, serviceRecord, token) => {
  return fetch(`${API}/service/record/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(serviceRecord),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
