import { useStore } from "../context/context";

const Contact = () => {
  const { mobile } = useStore();

  return (
    <div>
      <h2>{mobile}</h2>
    </div>
  );
};

export default Contact;
