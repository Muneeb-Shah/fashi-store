import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutation";
import Link from "react-router-dom/Link";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [doRegister] = useMutation(REGISTER, {
    onCompleted: () => {
      window.location = "/login";
    },
    onError: (error) => {
      if ((error.message = "Internal Server Error"))
        setError("User already exists");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, email: email, password: password };

    doRegister({
      variables: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    });

    // try {
    //   await register(user);
    //   setError("");
    //   window.location = "/login";
    // } catch (ex) {
    //   console.log(ex.response);
    //   if (ex.response && ex.response.status === 400)
    //     if ((ex.response.data.error.message = "This attribute must be unique"))
    //       setError("User already exists");
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="section-heading">
        <h2 class="section-heading__heading">Register</h2>
      </div>
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
