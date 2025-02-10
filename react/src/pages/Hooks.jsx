import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Counter";

const Hooks = () => {
  const [change, setChange] = useState(false);
  const [count, setCount] = useState(1);

  // useNavigate
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin");
  };

  //useMemo - memoise or cache
  const calculate = useMemo(() => {
    return 5 * 6;
  }, [change]);

  //useCallBack
  const increment = useCallback(() => {
    setCount((pre) => pre + 2);
  }, [change]);

  //useRef
  const inputRef = useRef();

  const handleUpload = () => {
    inputRef.current.click();
  };

  return (
    <>
      <h2>
        <Counter count={5} />
        <button onClick={increment}>Go to Home</button>
        <p>calculation : {count}</p>

        <input type="file" style={{ display: "none" }} ref={inputRef} />

        <button onClick={handleUpload}>Upload Profile</button>
      </h2>
    </>
  );
};

export default Hooks;
