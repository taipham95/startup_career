import axios from "axios";
import axiosInstance from "./axiosInstance";
import {APPLY_ENDPOINT} from "../constants";

export const dataServices = {
  getData: async (url) => {
    return axios(url).then(response => response.data);
  },
  postApply: (userInfo) => {
    return axiosInstance.post(APPLY_ENDPOINT, userInfo);
  }
}