import { useState } from "react";
import "../styles/contact.css";
import MainLayout from "../MainLayout";

const Contact = () => {
  const [number, setNumber] = useState(0);

  const handleMinus = () => {
    setNumber((pre) => pre - 1);
  };

  const handlePlus = () => {
    setNumber((pre) => pre + 1);
  };

  return (
    <MainLayout>
      <div className="contact">
        <div className="counter">
          <button onClick={handleMinus}>-</button>
          <span> {number} </span>
          <button onClick={handlePlus}>+</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
