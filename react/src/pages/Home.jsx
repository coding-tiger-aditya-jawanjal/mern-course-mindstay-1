import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  /*
    1. text     - variable
    2. setText  - function to change text variable
    3. useState - hook in react.js
    4. ""       - initial state / value
  */

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
            return <p key={index}>{element}</p>;
          })}
      </div>
    </main>
  );
};

export default Home;
