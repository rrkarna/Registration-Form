import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nagivate = useNavigate();
  const hadleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          nagivate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={hadleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className={styles.register}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
