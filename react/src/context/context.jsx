import { createContext, useState, useEffect, useContext } from "react";

const context = createContext();

const ContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState();

  const message = () => {
    alert("Hello world !");
  };

  useEffect(() => {
    setMobile(789456123);
  }, []);

  return (
    <context.Provider value={{ mobile, setMobile, message }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;

export const useStore = () => {
  return useContext(context);
};
