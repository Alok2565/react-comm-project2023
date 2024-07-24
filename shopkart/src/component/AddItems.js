import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const AddItems = () => {
    const [cart, setCart] = useState([]);
    const [itemIndex, setitemIndex] = useState(1);

  return (
    <>
      <div className="App">
      {cart.length === 0 && <p>Cart: (empty)</p>}
      {cart.length > 0 && <p>Cart: {cart.toString()}</p>}
      <button className="button border-0" onClick={() => {
          setCart([...cart, ` item ${itemIndex}`]);
          setitemIndex(itemIndex + 1);
        }}><Link className="p-2 px-3 text-white">Add To Cart</Link></button>
    </div>
    </>
  )
}

export default AddItems
