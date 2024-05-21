import React, { useState } from 'react';
import "./styles/Camo.css";
import { handlePayNow } from '../utils';

function Camo() {
  const [products, setProducts] = useState([
    {
             id: 1,
             name: 'Classic Flames Glass Case',
             price: 399,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer16_2ddfc7f0-462c-438b-ad04-e745c49740f5.jpg?v=1681113136&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer3_59d461ee-466b-4728-9fa5-490598ab8ce9.jpg?v=1681113138&width=800'
           },
           {
             id: 2,
             name: 'Strawberry Hearts Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer51_e42da599-f2e4-4a4a-aa13-45d1702d51a0.jpg?v=1681378861&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer51_58483d0a-cc3c-43d7-a6d6-1354b71c7b64.jpg?v=1681378861&width=800'
           },
           {
             id: 3,
             name: 'Brown Leopard Glass Case',
             price: 499,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer131_a191a6c2-cd47-4d57-ad21-3ec10267e91c.jpg?v=1681211850&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer62_c8571aa7-5b3d-4f6d-b727-770214a9e6e9.jpg?v=1681211850&width=800'
           },

           {
             id: 4,
             name: 'Melting Together Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer6_bbd2d246-8dba-41b6-a60d-f97ae2c53849.jpg?v=1681112698&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer62_6d90f5a2-e190-4979-ae71-54b3a83bb0f8.jpg?v=1681112700&width=800'
           },
           {
             id: 5,
             name: 'Aqua Hearts Glass Case',
             price: 599,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer59_24ac41ac-e38d-4f1d-b254-10d6d10c355f.jpg?v=1681202843&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer55_f460eea8-af4e-4f57-a128-f1187439cdf8.jpg?v=1681202843&width=800'
           },
           {
             id: 6,
             name: 'Very Peri Positive Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer50_73ab16f1-8b89-4b10-a432-377527f504fb.jpg?v=1681379959&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer50_08ec8c53-4633-4778-b796-d5c77f5c46e8.jpg?v=1681379959&width=800'
           },
           {
             id: 7,
             name: 'Moo Point Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer24_622a42bc-c78e-469c-a398-60631acbabb8.jpg?v=1681117403&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer44_860d421f-844a-4ce6-9d0b-73a6350e6bce.jpg?v=1681117407&width=800'
           },
           {
             id: 8,
             name: 'Very Peri Hearts Glass Case',
             price: 399,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer65_c709f9e9-346d-4cd0-a619-7acec5102b11.jpg?v=1681386120&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer14_2329b07c-73c1-4b4e-832f-35f3cc44c98b.jpg?v=1681386120&width=800'
           },
           {
             id: 9,
             name: 'Very Peri Slime Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer41_3c82b9f0-9d01-42db-ad3a-7a0e6f740c79.jpg?v=1681379901&width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer41_7b1316e2-84a4-4cfe-a86a-27b81085b511.jpg?v=1681379901&width=800'
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
      <img className="img-m3" src="https://coveritup.com/cdn/shop/collections/vibe-2k-banner-web.jpg?v=1625487375&width=1800" />
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

