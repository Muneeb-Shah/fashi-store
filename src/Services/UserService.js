import axios from "axios";
const apiEndPoint = "http://localhost:1337/api/users";

export function register(user) {
  return axios.post(apiEndPoint, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
