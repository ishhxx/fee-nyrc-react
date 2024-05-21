import React, { useState } from 'react';
import "./styles/Camo.css";
import { handlePayNow } from '../utils';

function Camo() {
  const [products, setProducts] = useState([
    {
             id: 1,
             name: 'Official Midnight Camo Glass Case',
             price: 399,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer12_b419c9e5-5379-493c-9f55-770962255a51.jpg?v=1681117064&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer56_7273e73e-23aa-4325-9943-e78e6b389c10.jpg?v=1681117065&width=800'
           },
           {
             id: 2,
             name: 'Jungle Camo Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer72.jpg?v=1680522800&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer72_8e56afa2-3a04-426d-a6ce-d6e62299c4de.jpg?v=1680522801&width=800'
           },
           {
             id: 3,
             name: 'Walnut Camo Glass Case',
             price: 499,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/walnut-camo-apple-iphone-13-mini-glass-case-1646448721_d77c32a1-e589-48a8-9884-7053acf2771b.jpg?v=1681380236&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer68_21ab2555-d5b7-4dab-8191-5dae1ade3e0a.jpg?v=1681380236&width=800'
           },

           {
             id: 4,
             name: 'Sandstone Camo Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer51_f0d07d9c-fa0a-41c8-bb53-fbc2c08b9dcb.jpg?v=1681385437&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer40_8745f978-8824-45f3-9858-b5fba24dcf85.jpg?v=1681385437&width=800'
           },
           {
             id: 5,
             name: 'Apple Camo Glass Case',
             price: 599,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer37_faccfab8-4abe-494f-b41d-bce7a78b8767.jpg?v=1680939474&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer56_c22d594b-4171-469e-982a-4cf043419b41.jpg?v=1680939474&width=800'
           },
           {
             id: 6,
             name: 'Berry Camo Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer42_edf735ae-7da2-4c37-b257-1612db11fa36.jpg?v=1680939940&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer38_aa45d79c-ae8c-4efe-9ebc-03e2e46a43a8.jpg?v=1680939940&width=800'
           },
           {
             id: 7,
             name: 'Blueberry Camo Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer78_83be2d54-b639-4c40-aea6-169eb935b284.jpg?v=1681209812&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer76_520d5247-0a4f-412f-93ec-c99522d19d50.jpg?v=1681209812&width=800'
           },
           {
             id: 8,
             name: 'Bubblegum Camo Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer105_6c50346a-d046-4423-93e4-94a9278c7de5.jpg?v=1681213640&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer133_12962a68-de2e-4ca4-b3bc-a54711dca587.jpg?v=1681213640&width=800'
           },
           {
             id: 9,
             name: 'Urban Camo Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer67_fe8bbf13-b642-4a1f-bd80-7f01eac25d85.jpg?v=1681379775&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer67_b74c5f15-3816-42ac-b60f-7b0da921474d.jpg?v=1681379775&width=800'
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
      <img className="img-m" src="https://coveritup.com/cdn/shop/collections/camo_banner-min.jpg?v=1621424879&width=1800" />
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

