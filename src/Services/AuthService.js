import axios from "axios";
import jwtDecode from "jwt-decode";

const apiEndPoint = "https://fashi-backend.herokuapp.com/api/auth/local";

export async function login(user) {
  const { data } = await axios.post(apiEndPoint, {
    identifier: user.identifier,
    password: user.password,
  });
  console.log(data);
  document.cookie = `token=${data.jwt}`;
}

export function getCurrentUser() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  try {
    const jwt = getCookie("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
