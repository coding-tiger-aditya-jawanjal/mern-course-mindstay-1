import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);

    const result = await data.json();

    setProducts(result);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="products">
      {products.length > 0 ? (
        products.map((e, i) => {
          return <ProductCard key={e.id} item={e} />;
        })
      ) : (
        <p>No Product Available</p>
      )}
    </div>
  );
};

export default Home;
