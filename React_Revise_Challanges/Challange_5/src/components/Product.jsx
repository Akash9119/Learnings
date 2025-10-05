import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h2>Product Name: {props.name}</h2>
        <p>{props.name} Price is: {props.price}</p>
    </div>
  )
}

export default Product