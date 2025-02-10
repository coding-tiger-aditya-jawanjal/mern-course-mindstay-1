import { useNavigate } from "react-router-dom";

const Hooks = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <>
      <h2>
        <button onClick={handleClick}>Go to Home</button>
      </h2>
    </>
  );
};

export default Hooks;
