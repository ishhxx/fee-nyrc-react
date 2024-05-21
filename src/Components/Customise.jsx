import React, { useState } from 'react';
import "./styles/Printed.css";
import { handlePayNow } from '../utils';

function Printed() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Customise Your Hoodie (Image)',
      price: 999,
      rating: 5,
      image: '//coveritup.com/cdn/shop/products/image_133.png?v=1661409703&amp;width=640',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 2,
      name: 'Customise Your Hoodie <br> (Pocket Text)',
      price: 999,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/image_137.png?v=1661416750&amp;width=640',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 3,
      name: 'Customise Your Holographic Foil Hoodie',
      price: 1099,
      rating: 4,
      image: '//coveritup.com/cdn/shop/files/Layer64_1_9a80658e-4370-4ee8-86fa-5571539bc460.gif?v=1686126893&amp;width=640" alt="Customise Your Holographic Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Layer64_1_9a80658e-4370-4ee8-86fa-5571539bc460.gif?v=1686126893&amp;width=200 200w, //coveritup.com/cdn/shop/files/Layer64_1_9a80658e-4370-4ee8-86fa-5571539bc460.gif?v=1686126893&amp;width=300 300w, //coveritup.com/cdn/shop/files/Layer64_1_9a80658e-4370-4ee8-86fa-5571539bc460.gif?v=1686126893&amp;width=400 400w, //coveritup.com/cdn/shop/files/Layer64_1_9a80658e-4370-4ee8-86fa-5571539bc460.gif?v=1686126893&amp;width=500 500w, //coveritup.com/cdn/shop/files/Layer64_1_9a80658e-4370-4ee8-86fa-5571539bc460.gif?v=1686126893&amp;width=600 600w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 4,
      name: 'Custom Embroidered Hoodie',
      price: 1499,
      rating: 3,
      image: 'https://i.pinimg.com/564x/5a/36/97/5a3697c776820867d85fffb6289fa137.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 5,
      name: 'Custom Coffee Hoodie',
      price: 1099,
      rating: 4,
      image: 'https://i.pinimg.com/564x/16/8a/3c/168a3cbcb962bfafb2fe6054125f6421.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 6,
      name: 'Custom Word with heart Hoodie',
      price: 1499,
      rating: 5,
      image: 'https://i.pinimg.com/564x/65/bc/d1/65bcd17e10cb58f1d5f59c0c5dcf8160.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 7,
      name: 'Custom Fav Anime Character Picture Hoodie',
      price: 1099,
      rating: 3,
      image: 'https://i.pinimg.com/564x/53/62/f7/5362f7aeb9ba760195e440da7e218eb3.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
        id: 8,
        name: 'Couple Matching Embroidered Hoodies with Initials on the Sleeve',
        price: 1299,
        rating: 4,
        image: 'https://i.pinimg.com/564x/14/bd/d2/14bdd2ffe9e94e557b585c3474d2d951.jpg',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
        id: 9,
        name: 'Custom Taylor Swift Eras Tour Hoodie',
        price: 1299,
        rating: 5,
        image: 'https://i.pinimg.com/564x/b3/63/a1/b363a18ff5e077fc7eb1159c99758ad1.jpg',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
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
        <h1><b>Customise Your Hoodie</b></h1>
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
      </div>
    </div>
  );
}

export default Printed;


