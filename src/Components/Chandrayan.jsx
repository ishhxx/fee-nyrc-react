import React, { useState } from 'react';
import "./styles/Camo.css";
import { handlePayNow } from '../utils';

function Camo() {
  const [products, setProducts] = useState([
    {
             id: 1,
             name: 'Chandrayaan Moon Landing Text Glass Case',
             price: 399,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/files/4_13.jpg?v=1693899145&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/files/1_16.jpg?v=1693899144&width=800'
           },
           {
             id: 2,
             name: 'Custom Your Chandrayaan Boarding Pass Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/files/1_15.jpg?v=1693898555&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/files/4_12.jpg?v=1693898555&width=800'
           },
           {
             id: 3,
             name: 'Chandrayaan Blueprint Glass Case',
             price: 499,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/files/1_14.jpg?v=1693898300&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/files/4_11.jpg?v=1694070592&width=800'
           },

           {
             id: 4,
             name: 'Chandrayaan Clear Silicone Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/files/1_17.jpg?v=1693899582&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/files/Layer1_a91ba49b-4b56-401d-940c-48585e21288b.jpg?v=1693899583&width=800'
           }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      // If the quantity is greater than 1, decrease the quantity
      setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)));
    } else {
      // If the quantity is 1 or the item doesn't exist, remove it from the cart
      setCart(cart.filter(item => item.id !== product.id));
    }
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const [sortType, setSortType] = useState('');

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'priceAsc') {
      return a.price - b.price;
    } else if (sortType === 'priceDesc') {
      return b.price - a.price;
    } else if (sortType === 'ratingDesc') {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className="img-main">
      <img className="img-m3" src="https://coveritup.com/cdn/shop/collections/chandrayaan_3.png?v=1694247640&width=1800" />
      <section id="product1" className="section-p1">
        <h1 className="img-h1"><b>Choose Your Own Cover</b></h1>
        <div className="sorting">
          <label htmlFor="sort" className="sort-by">Sort By: </label>
          <select id="sort" onChange={handleSortChange} className="select-large">
            <option value="">Select</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="ratingDesc">Rating: High to Low</option>
          </select>
        </div>
        <div className="pro-container">
          {sortedProducts.map(product => (
            <div key={product.id} className="pro">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="image-hover">
                  <img src={product.hoverImage} alt={product.name} />
                </div>
              </div>
              <div className="des">
                <h4>{product.name}</h4>
                <div className="star">
                  {[...Array(product.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h3>Rs. {product.price}</h3>
                <button className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button>
                {/* Display the quantity of the product in the cart */}
                {cart.find(item => item.id === product.id) && (
                  <div className="quantity">Quantity: {cart.find(item => item.id === product.id).quantity}</div>
                )}
              </div>
              {/* <Link to="/innerpage"><i className="fal fa-shopping-cart cart"></i></Link> */}
            </div>
          ))}
        </div>
      </section>
      <div className="parent-cart">
      <div className="cart">
        <h2>Cart 🛒</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <div className='cart-item-card'>
                  <span className="cart-item-name">{item.name}</span>
                  <div className="quantity-controls">
                    <button onClick={() => removeFromCart(item)}>-</button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <span className="cart-item-amount">Amount: Rs. {item.price * item.quantity}</span>
                </div>
                
              </div>
            </li>
          ))}
        </ul>
        <div className="total-amount">Total Purchase: Rs. {getTotalAmount()}</div>
        <button className="pay-now" onClick={() => handlePayNow(cart)}>Pay Now</button>
      </div>
      </div>
    </div>
  );
}


export default Camo;

