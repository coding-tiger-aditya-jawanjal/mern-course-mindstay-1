import { memo, useReducer } from "react";

const Counter = memo(({ count }) => {
  const initialValue = {
    num: 10,
    products: [],
    admin: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { num: state.num + 2 };
      case "dec":
        return { num: state.num - 2 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div
      style={{
        border: "4px solid red",
        padding: "10px",
        margin: "30px",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <button onClick={() => dispatch({ type: "inc" })}>Add</button>

      <button onClick={() => dispatch({ type: "dec" })}>Substract</button>

      <h2>My-Number : {state.num}</h2>
      <h2>Count : {count}</h2>
    </div>
  );
});

export default Counter;
