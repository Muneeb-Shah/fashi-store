import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutation";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [doLlogin] = useMutation(LOGIN, {
    onCompleted: (data) => {
      document.cookie = `token=${data.login.jwt}`;
      const { state } = props.location;
      window.location = state ? state.from.pathname : "/";
    },
    onError: (error) => {
      if (error?.message === "Internal Server Error") {
        setError("Invalid email or password");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { identifier: email, password: password };

    doLlogin({
      variables: { username: user.identifier, password: user.password },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="section-heading">
        <h2 class="section-heading__heading">Log In</h2>
      </div>
      {error && <h2 className="error-message">{error}</h2>}
      <div>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        Login
      </button>
      <p className="login-form__link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
