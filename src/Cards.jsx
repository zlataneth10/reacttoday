import json_product from './product.json';

//import images
import product_img1 from "./assets/images/img1.jpg";
import product_img2 from "./assets/images/img2.jpg";
import product_img3 from "./assets/images/img3.jpg";

const products = [
  {
    product_name: "Product One",
    product_desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    product_price: 200,
    product_img: product_img1,
  },
  {
    product_name: "Product Two",
    product_desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    product_price: 100,
    product_img: product_img2,
  },
  {
    product_name: "Product Three",
    product_desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    product_price: 230,
    product_img: product_img3,
  },
];

function Cards() {
  return (
    <>
      {json_product.map(function (product, index) {
        const { product_img, product_desc, product_price, product_name } = product;
          
        return (
          <div key={index}>
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
              <p>{'new_class/src/assets/images/img3.jpg'}</p>
            </div>
            <div className="handler">
              <button>add to cart</button>
              <button>delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;



function news(){
  let num1 = 20;
  let num2 = 10;
  let num3 = 30;

  let result = num1 + num2 + num3;

  return result;
}

console.log(news());

//forloop
//forEach - read-only
//map