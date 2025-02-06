import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [number, setNumber] = useState(0);

  const handleMinus = () => {
    setNumber((pre) => pre - 1);
  };

  const handlePlus = () => {
    setNumber((pre) => pre + 1);
  };

  return (
    <div className="contact">
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <span> {number} </span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
};

export default Contact;
