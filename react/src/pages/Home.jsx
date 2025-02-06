import { useEffect, useState } from "react";
import "../styles/home.css";
import Post from "../components/Post";

const Home = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  /*
    1. text     - variable
    2. setText  - function to change text variable
    3. useState - hook in react.js
    4. ""       - initial state / value
  */

  useEffect(() => {}, []);

  const handleAdd = () => {
    setTasks((prev) => [...prev, text]);
    setText("");
  };

  return (
    <main>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter the Task..."
          id="text"
          onChange={(e) => setText(e.target.value)}
          value={text ? text : ""}
        />
        <button className="btn" onClick={handleAdd}>
          Add Task
        </button>
      </div>
      <div className="box">
        {tasks?.length > 0 &&
          tasks.map((element, index) => {
            return <Post number={index} />;
          })}
      </div>
    </main>
  );
};

export default Home;

/*

1. LocalStorage - persist
2. Session Storage - removed when the browser tab is closed
3. Cookies - After given time , it deletes
*/

/*
  useEffect Hook

  1. Functional Comp  
    a. useEffect Hook

  2. Class Compo
    a. componentDidMount
    b. componendDidUnmount
    c. componentDidUpdate

 */
