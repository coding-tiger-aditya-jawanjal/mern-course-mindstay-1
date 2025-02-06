import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const fetchSingleProduct = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${params?.id}`);

    const result = await data.json();

    setProduct(result);
  };

  useEffect(() => {
    if (params) {
      fetchSingleProduct();
    }
  }, [params]);

  return (
    <div>
      <h2>{product ? product.title : ""}</h2>
    </div>
  );
};

export default SingleProduct;
