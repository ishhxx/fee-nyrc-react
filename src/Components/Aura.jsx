import React, { useState } from 'react';
import "./styles/Aura.css";
import { handlePayNow } from '../utils';

function Aura() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wellness Gradient Glass Case',
      price: 499,
      rating: 5,
      image: 'https://coveritup.com/cdn/shop/files/Layer6_5.png?v=1686635794&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/files/Layer6_6.png?v=1686635794&width=800'
    },
    {
      id: 2,
      name: 'Focus Gradient Glass Case',
      price: 399,
      rating: 4,
      image: 'https://coveritup.com/cdn/shop/files/Layer2_5.png?v=1686635137&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/files/Layer8_6.png?v=1686635137&width=800'
    },
    {
      id: 3,
      name: 'Infinite Glass Case',
      price: 499,
      rating: 4,
      image: 'https://coveritup.com/cdn/shop/files/image_418.png?v=1686636322&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/files/Layer6_4.png?v=1686636322&width=800'
    },
    {
      id: 4,
      name: 'Custom Self Love Glass Case',
      price: 499,
      rating: 3,
      image: 'https://coveritup.com/cdn/shop/files/image_422_7739cd2a-2ca1-4bbc-a365-85df6c9c6d7a.png?v=1686730520&width=800',
      hoverImage: '"https://coveritup.com/cdn/shop/files/image_421_5aeccc4f-5ee8-48cd-af05-4477946d2897.png?v=1686730522&width=800'
    },
    {
      id: 5,
      name: 'Zen Zone Glass Case',
      price: 499,
      rating: 4,
      image: 'https://coveritup.com/cdn/shop/files/Layer7_8.jpg?v=1686806227&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/files/Layer7_9.jpg?v=1686806227&width=800'
    },
    {
      id: 6,
      name: 'Healing Hues Glass Case',
      price: 599,
      rating: 5,
      image: 'https://coveritup.com/cdn/shop/files/Layer1_2.png?v=1686635006&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/files/Layer7_6.jpg?v=1686635006&width=800'
    },
    {
      id: 7,
      name: 'Dreamer Delight Glass Case',
      price: 399,
      rating: 3,
      image: 'https://coveritup.com/cdn/shop/files/Layer8_5.png?v=1686634660&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/files/Layer1_3.png?v=1686634660&width=800'
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
        <h1><b>My Aura Collection</b></h1>
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
              {/* <a href="#"><i className="fal fa-shopping-cart cart"></i></a> */}
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

export default Aura;


