
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

function Product() {
  const { productId } = useParams();
  const { all_product } = useContext(ProductContext);
  const product = all_product.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto mb-4 rounded-md"
      />
      <div className="flex flex-col space-y-2">
        <div className="text-xl font-semibold text-green-500">
          {product.new_price}
        </div>
        <div className="text-lg text-gray-500 line-through">
          {product.old_price}
        </div>
      </div>
    </div>
  );
}

export default Product;
