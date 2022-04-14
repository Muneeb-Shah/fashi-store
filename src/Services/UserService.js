import axios from "axios";
const apiEndPoint = "https://fashi-backend.herokuapp.com/api/users";

export function register(user) {
  return axios.post(apiEndPoint, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
