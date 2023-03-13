import axios from "axios";

export const dataServices = {
  getData: (url) => {
    return axios(url).then(response => response.data);
  },
}