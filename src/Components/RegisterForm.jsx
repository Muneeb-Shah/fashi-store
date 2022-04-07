import { useEffect, useState } from "react";
import Link from "react-router-dom/Link";
import { register } from "../Services/UserService";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username: username, email: email, password: password };
    try {
      await register(user);
      setError("");
      window.location = "/";
    } catch (ex) {
      console.log(ex.response);
      if (ex.response && ex.response.status === 400)
        setError(ex.response.data.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="form__heading">Register</h1>
      {error && <h2 className="error-message">{error}</h2>}
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.currentTarget.value)}
          required
        />
      </div>
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
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          id="exampleInputPassword1"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        Register
      </button>
      <p className="login-form__link">
        Already registered? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
