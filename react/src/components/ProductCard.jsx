const ProductCard = ({ item }) => {
  return (
    <>
      <div className="card">
        <img src={item.image} alt="hajah" className="product-image" />
        <h2>{item.title.substring(0, 30)}</h2>
        <p>{item.description.substring(0, 70)}</p>
        <p>Price : {item.price}</p>
        <button className="my-btn">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
