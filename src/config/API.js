import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.trackinglove.com/",
});

export const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
