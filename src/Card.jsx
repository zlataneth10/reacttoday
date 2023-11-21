/* eslint-disable react/prop-types */

const Card = ({ product }) => {
    const { product_img, product_desc, product_price, product_name } = product;

  return (
    <div>
      <div className="product_img">
        <img
          style={{ width: "100%", height: "100%" }}
          src={product_img}
          alt={product_name}
        />
      </div>
      <div className="product_details">
        <h1>{product_name}</h1>
        <h4>${product_price}</h4>
        <p>{product_desc}</p>
      </div>
      <div className="handler">
        <button>add to cart</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Card;
