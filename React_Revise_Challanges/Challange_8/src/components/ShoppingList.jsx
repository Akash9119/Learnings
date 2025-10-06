import React, { useState } from 'react'

const ShoppingList = () => {
    const [listItems, setListItems] = useState([{}]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProdutctPrice] = useState(0);

    const updateProductName = (e) => {
        setProductName(e.target.value);
    }
    const updateProductPrice = (e) => {
        setProdutctPrice(e.target.value);
    }

    const updateProduct = () => {
        setListItems([...listItems, {name: productName, price: productPrice}]);
    } 

  return (
    <div>

        <div>
            {
                listItems.length > 0 ?listItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>Product {item.name} is at a cost of {item.price}</p>
                            </div>
                    )
                }) : <p>No items in the list</p>
            }
        </div>
        <h2>Shopping List Component</h2>
        <input type="text" onChange={updateProductName} placeholder='Product Name' />
        <input type="number" onChange={updateProductPrice} placeholder='Product Price' />
        <button onClick={updateProduct}>Add Product</button>
    </div>
  )
}

export default ShoppingList