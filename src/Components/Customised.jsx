import React, { useState } from 'react';
import "./styles/Camo.css";
import { handlePayNow } from '../utils';

function Camo() {
  const [products, setProducts] = useState([
    {
             id: 1,
             name: 'Custom Floral Memories Clear Silicone Case',
             price: 399,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/files/Layer3_16.png?v=1686807482&amp;width=600',
             hoverImage: 'https://coveritup.com/cdn/shop/files/Layer13_2.png?v=1686807482&amp;width=600'
           },
           {
             id: 2,
             name: 'Custom Marvel Vintage Spider-Man Glass Case',
             price: 399,
             rating: 4,
             image: '//coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=800" alt="Official Marvel Vintage Spider-Man Glass Case" srcset="//coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=200 200w, //coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=300 300w, //coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=400 400w, //coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=500 500w, //coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=600 600w, //coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=700 700w, //coveritup.com/cdn/shop/products/Layer29_2d520e1a-c02e-47c3-81c1-53205ec9ed7b.jpg?v=1681117618&amp;width=800 800w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"',
             hoverImage: '//coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=800" alt="Official Marvel Vintage Spider-Man Glass Case" srcset="//coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=200 200w, //coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=300 300w, //coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=400 400w, //coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=500 500w, //coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=600 600w, //coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=700 700w, //coveritup.com/cdn/shop/products/Layer44_7e7f8b60-c8cd-49c1-b8b2-5617c60ecafe.jpg?v=1681117619&amp;width=800 800w" width="585" height="315" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
           },
           {
             id: 3,
             name: 'Wawy Style Mirror Finish Customised iPhone Case With Crystal Heart Charm ( Pink )',
             price: 499,
             rating: 4,
             image: '//kalakaarindiaa.com/cdn/shop/files/002_8e4484dc-5d80-43ad-9a25-8bea27150b76.jpg?v=1699417945&amp;width=3000',
             hoverImage: '//kalakaarindiaa.com/cdn/shop/files/IMG_5655.jpg?v=1689329259&amp;width=3000'
           },

           {
             id: 4,
             name: 'Energy Saving Mode Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer81_d5ddab40-3c60-4374-9e51-bf8c88b339d9.jpg?v=1681188844&amp;width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer80_50b5e0ed-1b0e-453f-84ff-6486563d02ad.jpg?v=1681188845&amp;width=800'
           },
           {
             id: 5,
             name: 'Custom Disney Mickey Mouse Pattern Glass Case',
             price: 599,
             rating: 4,
             image: 'https://coveritup.com/cdn/shop/products/Layer9_f8430e4c-8d0f-408a-acd4-fb73536312f6.jpg?v=1681113138&amp;width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer59_7dc24c8a-978c-49a1-8b89-d616642c6c0e.jpg?v=1681113139&amp;width=800'
           },
           {
             id: 6,
             name: 'Food is mood Boy Glass Case',
             price: 599,
             rating: 5,
             image: 'https://coveritup.com/cdn/shop/products/Layer55_b6d7883a-77e4-43e7-bb28-0a8a3a411147.jpg?v=1680931160&amp;width=800',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer55_05087c55-db73-470c-9a04-4be5ac187913.jpg?v=1680931160&amp;width=800'
           },
           {
             id: 7,
             name: 'Custom Star Wars Millennium Falcon Glass Case',
             price: 499,
             rating: 3,
             image: 'https://coveritup.com/cdn/shop/products/Layer18_625ff65a-6f37-48cd-a417-036bdefdadf2.jpg?v=1681116365&amp;width=600',
             hoverImage: 'https://coveritup.com/cdn/shop/products/Layer50_ae2764bd-4b87-4b27-b53b-29d90815824d.jpg?v=1681116365&amp;width=800"'
           },
           {
             id: 8,
             name: 'Reflective Mirror Customised Case for Iphone',
             price: 399,
             rating: 4,
             image: 'https://kalakaarindiaa.com/cdn/shop/products/Untitled-1.jpg?v=1674629360&amp;width=3000',
             hoverImage: 'https://kalakaarindiaa.com/cdn/shop/products/Sc310087a90414421b216fed1c41b83abc.webp?v=1674629360&amp;width=3000'
           },
           {
             id: 9,
             name: 'Iphone Impact Proof Silicon Case ( Paris And London Pink )',
             price: 599,
             rating: 5,
             image: '//kalakaarindiaa.com/cdn/shop/products/IMG_8519_08893829-690e-4ab0-bd9d-fc47ad246932.jpg?v=1677048145&amp;width=3000',
             hoverImage: '//kalakaarindiaa.com/cdn/shop/products/IMG_8204.jpg?v=1676996843&amp;width=3000'
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
      <img className="img-m2" src="./image/e963e76deae4034889f40d91f5964a5c.jpg" />
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

