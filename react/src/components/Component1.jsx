import { useStore } from "../context/context";

const Component1 = () => {
  const { mobile, message } = useStore();

  return (
    <div>
      <h2>Mobile Number : {mobile} </h2>
    </div>
  );
};

export default Component1;
