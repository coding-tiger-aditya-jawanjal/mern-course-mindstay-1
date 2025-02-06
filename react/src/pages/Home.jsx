import { useEffect } from "react";

const Home = () => {
  const fetchProductsData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const result = await data.json();

    console.log(result);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
