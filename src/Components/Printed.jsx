import React, { useState } from 'react';
import "./styles/Printed.css";
import { handlePayNow } from '../utils';

function Printed() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Joker Hoodie',
      price: 999,
      rating: 5,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707720173_8229365.jpg?v=2" alt="Joker: Wanted! Men Oversized Hoodies" title="Buy Official Joker: Wanted! Men Oversized Hoodie Online" width="585" height="315" class="pointer minProd customFade gm-added gm-loaded gm-observing gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707720173_8229365.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707720173_8229365.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 2,
      name: 'Punisher Hoodie',
      price: 999,
      rating: 4,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702460615_8208292.jpg?v=2" alt="Punisher: Vigilante Men Oversized Hoodies" title="Buy Official Punisher: Vigilante Men Oversized Hoodie Online" width="585" height="315" class="pointer minProd customFade gm-added gm-observing gm-loaded gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702460615_8208292.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702460615_8208292.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 3,
      name: 'Winnie The Pooh',
      price: 1099,
      rating: 4,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700285106_1769541.jpg?v=2" alt="Winnie The Pooh: Honey Love Women Oversized Hoodies" title="Buy Winnie The Pooh: Honey Love Women Oversized Hoodie Online" width="585" height="315" class="pointer minProd customFade gm-added gm-observing gm-loaded gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700285106_1769541.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700285106_1769541.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 4,
      name: 'Bugs Bunny',
      price: 1499,
      rating: 3,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703224491_3382161.jpg?v=2" alt="Bugs Bunny: Samurai Women Oversized Hoodies" title="Buy Bugs Bunny: Samurai Women Oversized Hoodie Online" width="585" height="200" class="pointer minProd customFade gm-added gm-loaded gm-observing gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703224491_3382161.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703224491_3382161.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 5,
      name: 'Minion Hoodie All Season Hoodie',
      price: 1099,
      rating: 4,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668232382_9507671.jpg?v=2" alt="Minions: Mood Women Cropped Oversized Hoodies online" title="Buy Official Minions: Mood Women Cropped Oversized Hoodies Online" width="585" height="315" class="pointer minProd customFade gm-added gm-loaded gm-observing gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668232382_9507671.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668232382_9507671.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 6,
      name: 'The Boys',
      price: 999,
      rating: 5,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700643936_1277260.jpg?v=2" alt="The Boys: Official Logo Men Oversized Hoodies" title="Buy The Boys: Official Logo Mens Oversized Hoodies Online" width="585" height="315" class="pointer minProd customFade gm-added gm-observing gm-loaded gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700643936_1277260.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700643936_1277260.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 7,
      name: 'Thor:Worthy',
      price: 1099,
      rating: 3,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678716199_1626467.jpg?v=2" alt="Thor: Worthy Hoodies" title="Buy Official Thor Worthy Mens Hoodies Online" width="585" height="315" class="pointer minProd customFade gm-added gm-observing gm-loaded gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678716199_1626467.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678716199_1626467.jpg?format=webp&amp;w=480&amp;dpr=1.3',
      hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
        id: 8,
        name: 'Mix and Match',
        price: 1599,
        rating: 4,
        image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702743542_2252097.jpg?v=2" alt="TSS Originals: Mix and Match Men Oversized Hoodies" title="Buy Official TSS Originals: Mix and Match Men Oversized Hoodie Online" width="585" height="315" class="pointer minProd customFade gm-added gm-observing gm-loaded gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702743542_2252097.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702743542_2252097.jpg?format=webp&amp;w=480&amp;dpr=1.3',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
        id: 9,
        name: 'Star Wars',
        price: 1299,
        rating: 5,
        image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1704550969_8235025.jpg?v=2" alt="Star Wars: Do or Do Not Men Oversized Hoodies" title="Buy Star Wars: Do or Do Not Men Oversized Hoodie Online" width="585" height="315" class="pointer minProd customFade gm-added gm-observing gm-loaded gm-observing-cb customFade-active" style="width: 100%; height: 100%; max-width: 410px;" data-src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1704550969_8235025.jpg?v=2" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1704550969_8235025.jpg?format=webp&amp;w=480&amp;dpr=1.3',
        hoverImage: '//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=640" alt="Customise Your Silver Foil Hoodie" srcset="//coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=200 200w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=300 300w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=400 400w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=500 500w, //coveritup.com/cdn/shop/files/Hoodie_size_chart_640x_4a201ba5-75e1-4419-b7af-f86c5df14c0a.jpg?v=1701850768&amp;width=600 600w" width="640" height="334" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
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


