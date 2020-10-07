import { API } from "../../backend";

export const createService = (userId, serviceData, token) => {
  return fetch(`${API}/service/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(serviceData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
