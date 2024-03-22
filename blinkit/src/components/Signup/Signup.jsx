import { Link } from "react-router-dom";
import styles from "./Siginup.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nagivate = useNavigate();
  const hadleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        nagivate("/login");
      })
      .catch((err) => console.log(err));
    console.log("Send");
  };
  return (
    <section>
      <div className={styles.container}>
        <h1>Register</h1>
        <form onSubmit={hadleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
        </form>
        <p className={styles.haveAccount}>Already Have an Account</p>

        <Link to="/login" className={styles.login}>
          Login
        </Link>
      </div>
    </section>
  );
};
export default Signup;
