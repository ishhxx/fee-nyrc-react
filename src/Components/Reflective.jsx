import React, { useState } from 'react';
import "./styles/Printed.css";
import { handlePayNow } from '../utils';

function Printed() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Manfinity EMRG Men 1pc Slogan Graphic Drawstring Hoodie',
      price: 999,
      rating: 5,
      image: 'https://i.pinimg.com/564x/64/35/c2/6435c222aaa4c8286b99cee765bbcbbd.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 2,
      name: 'Reflective Bear Print Drop Shoulder Drawstring Hoodie',
      price: 999,
      rating: 4,
      image: 'https://i.pinimg.com/564x/6f/74/f8/6f74f846c5ce630211fbfd896dbad19c.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 3,
      name: '3d Print Mens Hoodie Hooded Pullover Casual Loose Sports Tops Sweatshirt Jumper',
      price: 1099,
      rating: 4,
      image: 'https://i.pinimg.com/564x/81/aa/62/81aa62d8f881fa782a7d77fc63fedc9f.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 4,
      name: 'Blue Butterfly Art Letter Slogan Design Women Fleece Hoodie Autumn Fashion Pullovers',
      price: 1499,
      rating: 3,
      image: 'https://i.pinimg.com/564x/5d/ba/a1/5dbaa1af30e0d680c6913b13f4edc4da.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 5,
      name: 'Plus Reflective Headphone Print Drop Shoulder Hoodie',
      price: 1099,
      rating: 4,
      image: 'https://i.pinimg.com/564x/5a/94/0f/5a940faa3e0a4283513a5ff5b973dba0.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 6,
      name: ' Custom Dye Hoodie',
      price: 999,
      rating: 5,
      image: 'https://i.pinimg.com/564x/30/4e/ad/304eadcb5027ec41deb76240a30a0141.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
      id: 7,
      name: 'Inferno Lightning Hoodie',
      price: 1099,
      rating: 3,
      image: 'https://i.pinimg.com/564x/69/64/1d/69641d4b20c482419133e74a4f4c8f5b.jpg',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
        id: 8,
        name: 'Jujutsu Kaisen Silver Foil All Season Hoodie',
        price: 1599,
        rating: 4,
        image: '//coveritup.com/cdn/shop/products/jujutsu_kaisen_silver_foil_hoodie-1.gif?v=1663095541&amp;width=640" alt="Jujutsu Kaisen Silver Foil Hoodie for Men &amp; Women from coveritup.com" srcset="//coveritup.com/cdn/shop/products/jujutsu_kaisen_silver_foil_hoodie-1.gif?v=1663095541&amp;width=200 200w, //coveritup.com/cdn/shop/products/jujutsu_kaisen_silver_foil_hoodie-1.gif?v=1663095541&amp;width=300 300w, //coveritup.com/cdn/shop/products/jujutsu_kaisen_silver_foil_hoodie-1.gif?v=1663095541&amp;width=400 400w, //coveritup.com/cdn/shop/products/jujutsu_kaisen_silver_foil_hoodie-1.gif?v=1663095541&amp;width=500 500w, //coveritup.com/cdn/shop/products/jujutsu_kaisen_silver_foil_hoodie-1.gif?v=1663095541&amp;width=600 600w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="320" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"'
    },
    {
        id: 9,
        name: 'Boys Reflective Cartoon Graphic Hoodie',
        price: 1299,
        rating: 5,
        image: 'https://i.pinimg.com/564x/19/1f/fb/191ffb9f8955cb2e47b58d26db23fcea.jpg',
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
      </div>
    </div>
  );
}

export default Printed;


