import React, { useState } from 'react';
import "./styles/Camo.css";
import { handlePayNow } from '../utils';

function Camo() {
  const [products, setProducts] = useState([
    {
             id: 1,
             name: 'Blue Morpho Tie-Dye Glass Case',
             price: 399,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer70_b96254c6-4048-40ef-8b59-768fde3d0319.jpg?v=1681208667&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer88_ad9974aa-9ffe-4fc2-bb3c-c9d679870c87.jpg?v=1681208667&width=800'
           },
           {
             id: 2,
             name: 'Blue Vortex Tie-Dye Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer43_d29166eb-0252-4c36-b253-33729aa6da88.jpg?v=1681384905&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer5_799de63d-9ae9-4e62-b4b7-9fba5655469a.jpg?v=1681384905&width=800'
           },
           {
             id: 3,
             name: 'Bloom Tie-Dye Glass Case',
             price: 499,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer44_c4cd4172-8815-4270-9d05-9cfb4ce2c900.jpg?v=1681384984&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer6_7aebea3d-7362-4553-ae44-7fa349539b73.jpg?v=1681384984&width=800'
           },

           {
             id: 4,
             name: 'Colour Dream Tie-Dye Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer45_5557d8e4-f2c8-445c-a841-4b5876f40def.jpg?v=1681385036&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer7_f07ed99b-65ac-4487-bb24-b649312d7fb7.jpg?v=1681385036&width=800'
           },
           {
             id: 5,
             name: 'Young Wild Tie-Dye Glass Case',
             price: 599,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer57_93ca92a9-4b50-4706-9da0-801f9607c6c3.jpg?v=1681385816&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer6_f1babea8-7a62-4035-81e0-d0b5e59c6f13.png?v=1681388622&width=800'
           },
           {
             id: 6,
             name: 'No Bad Vibes Tie-Dye Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer47_0ce0d424-00f7-4e71-a9fd-1d53df248230.jpg?v=1681385226&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer19_81a8e802-8f12-471b-b96f-6598e1fc6e6d.jpg?v=1681385226&width=800'
           },
           {
             id: 7,
             name: 'Sunshine All The Time Tie-Dye Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer48_ac3ec2af-8eab-4f05-a1fa-02b3de5abca3.jpg?v=1681385358&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer5_0626a2ff-956a-495d-b6da-c28c82cd1ef3.png?v=1681388601&width=800'
           },
           {
             id: 8,
             name: 'Aurora Tie-Dye Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer71_c7670b82-8cdc-4fbf-bbfb-10cd25419223.jpg?v=1681208857&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer89_8030941c-2a65-41c4-9981-3a28421232fc.jpg?v=1681208857&width=800'
           },
           {
             id: 9,
             name: 'Scarlet Black Tie-Dye Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer69_aa2f2e08-5214-4f66-b0c7-28fab5e77723.jpg?v=1681208594&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer87_afb9d577-f603-4f5f-9f03-ae92b971224a.jpg?v=1681208594&width=800'
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
      <img className="img-m1" src="https://coveritup.com/cdn/shop/collections/tie_dye_banner.jpg?v=1620463355&width=1800" />
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

