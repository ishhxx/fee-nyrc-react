import React, { useState } from 'react';
import "./styles/Printed.css";
import { handlePayNow } from '../utils';

function Printed() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Men Kangaroo Pocket Drawstring Thermal Hoodie',
      price: 999,
      rating: 5,
      image: 'https://i.pinimg.com/564x/97/08/60/970860035751501f8a7337999d477eb8.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640'
    },
    {
      id: 2,
      name: 'VFIVE UNFOUR 350gsm Thick Cotton Lined Hoodies Winter Oversized Blank Hoodie',
      price: 999,
      rating: 4,
      image: 'https://i.pinimg.com/564x/f5/76/02/f5760275619393da0f8609bd549b8cae.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640'
    },
    {
      id: 3,
      name: 'Lilac Basic Hoodie',
      price: 1099,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/LilacBasicHoodie.jpg?v=1657606483&amp;width=640',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 4,
      name: 'Mint Basic All Season Hoodie',
      price: 1499,
      rating: 3,
      image: '//coveritup.com/cdn/shop/products/mintup.jpg?v=1668243600&amp;width=640',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 5,
      name: 'White Basic All Season Hoodie',
      price: 1099,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/WhiteBasicHoodie.jpg?v=1657607262&amp;width=640',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 6,
      name: 'Drawstring Kangaroo Pocket Drop Shoulder Thermal Lined Hoodie',
      price: 999,
      rating: 5,
      image: 'https://i.pinimg.com/564x/43/8c/94/438c94e3122a61bdc9580f3e310a8396.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 7,
      name: 'Black Pullover Hoodie | Womens Pullover Hoodie Organic Cotton |Customisable',
      price: 1099,
      rating: 3,
      image: 'https://i.pinimg.com/564x/c2/54/1c/c2541cebfd77966700c0bd560fc34f50.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640'
    },
    {
        id: 8,
        name: 'Drop Shoulder Drawstring Thermal Hoodie',
        price: 1599,
        rating: 4,
        image: 'https://i.pinimg.com/564x/2c/65/4a/2c654a577a26acca41307cde8e7039e6.jpg',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
        id: 9,
        name: 'Men Patched Front Drawstring Hoodie',
        price: 1299,
        rating: 5,
        image: 'https://i.pinimg.com/564x/43/d3/09/43d309d0caf7682db65a3eda5bc55b12.jpg',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
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
        <h1><b>Printed Hoodies</b></h1>
      <section id="product1" className="section-p1">
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
      </div>x
    </div>
  );
}

export default Printed;


