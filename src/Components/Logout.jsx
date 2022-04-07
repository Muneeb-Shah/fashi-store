import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }, []);

  window.location = "/";
  return null;
};

export default Logout;
