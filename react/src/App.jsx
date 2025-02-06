import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
