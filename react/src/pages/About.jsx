import { useEffect, useState } from "react";
import "../styles/about.css";
import Cookies from "js-cookie";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    if (user) {
      return alert("User is already Registered !");
    }

    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(data));

    sessionStorage.setItem("user", JSON.stringify(data));

    Cookies.set("user", JSON.stringify(data), { expires: 7 });

    setUser(data);

    setName("");
    setEmail("");
    setPassword("");
  };

  const handleDelete = (e) => {
    e.preventDefault();

    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const addedUser = JSON.parse(localStorage.getItem("user"));

    setUser(addedUser);
  }, []);

  return (
    <>
      <div className="about">
        <form>
          <div className="input">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name ? name : ""}
            />
          </div>

          <div className="input">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email ? email : ""}
            />
          </div>

          <div className="input">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password ? password : ""}
            />
          </div>

          <button className="my-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="data">
        <p>Name : {user ? user.name : ""} </p>
        <p>Email : {user ? user.email : ""} </p>
        <p>Password : {user ? user.password : ""} </p>
        <button className="my-btn" onClick={handleDelete}>
          Delete Local Storage
        </button>
      </div>
    </>
  );
};

export default About;
