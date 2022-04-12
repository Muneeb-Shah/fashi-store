import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../Services/AuthService";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { identifier: email, password: password };
    try {
      await login(user);
      setError("");
      const { state } = props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        if (ex.response.data.error.message === "Invalid identifier or password")
          setError("Invalid email or password");
      }
    }
  };

  console.log(props.location);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="form__heading">Login</h1>
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
