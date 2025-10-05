import React from 'react'

const products = [
    {
        id: 1,
        name: "Phone",
        price: 50000
    },
    {
        id: 2,
        name: "Laptop",
        price: 120000
    },
    {
        id: 3,
        name: "Headphones",
        price: 2800
    }
]

const ProductList = () => {
  return (
    <div>
        {
            products.map((product) => {
                return (
                    <ul key={product.id}>
                    <li>Product Name: {product.name}</li>
                    <li>Product Price: {product.price}</li>
                </ul>
                )
            })
        }
    </div>
  )
}

export default ProductList