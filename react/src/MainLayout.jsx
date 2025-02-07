import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = () => {
  let auth = true;

  return (
    <div>
      <Header />
      {auth ? <Outlet /> : <p>You are not Authenticated</p>}
      <Footer />
    </div>
  );
};

export default MainLayout;
