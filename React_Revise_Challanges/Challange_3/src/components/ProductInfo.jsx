import React from 'react'

const product = {
    producNname: "Laptop",
    price: 45000,
    description: "This is good product",
};

const ProductInfo = () => {
  return (
    <div>
        <h1>Product Name: {product.producNname}</h1>
        <h2>Price: {product.price}</h2>
        <p>Description: {product.description}</p>
    </div>
  )
}

export default ProductInfo