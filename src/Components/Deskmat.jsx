// import React, { useState } from 'react';
// import './styles/Deskmat.css';

// function DeskMat() {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Worm Hole Desk Mat and Gaming Mouse Pad',
//       price: 999,
//       rating: 5,
//       image: '//coveritup.com/cdn/shop/products/Layer26.png?v=1672744086&amp;width=720',
//       hoverImage: '//coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=1080" alt="Worm Hole Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=200 200w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=300 300w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=400 400w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=500 500w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=600 600w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=700 700w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=800 800w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=1000 1000w" width="585" height="315" loading="lazy" class="product-card__image product-card__image--secondary object-fill" fetchpriority="low" sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1680px) / 3 - (24px / 3 * 2))'
//     },
//     {
//       id: 2,
//       name: 'Fluid Art Purple Desk Mat and Gaming Mouse Pad',
//       price: 1099,
//       rating: 4,
//       image: '//coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=720" alt="Fluid Art Purple Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=200 200w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=300 300w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=400 400w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=500 500w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=600 600w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=700 700w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"',
//       hoverImage: '//coveritup.com/cdn/shop/products/Layer70_419f26ab-f655-4690-b78f-f02cc1c62c18.png?v=1672744230&amp;width=1080'
//     },
//     {
//       id: 3,
//       name: 'Cuteness Overload Desk Mat and Gaming Mouse Pad',
//       price: 999,
//       rating: 4,
//       image: '//coveritup.com/cdn/shop/products/Layer43.png?v=1672744252&amp;width=720',
//       hoverImage: '//coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=1080" alt="Cuteness Overload Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=200 200w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=300 300w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=400 400w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=500 500w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=600 600w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=700 700w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=800 800w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=1000 1000w" width="585" height="315" loading="lazy" class="product-card__image product-card__image--secondary object-fill" fetchpriority="low" sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1680px) / 3 - (24px / 3 * 2))'
//     },
//     {
//       id: 4,
//       name: 'Anime Sci-fi Floating City Desk Mat and Gaming Mouse Pad',
//       price: 1499,
//       rating: 3,
//       image: '//coveritup.com/cdn/shop/products/AnimeSci-fiFloatingCityDeskMat_9a947886-e66b-4258-8d11-2dfbcebbaf1e.png?v=1673426780&amp;width=800' ,
//       hoverImage: '//coveritup.com/cdn/shop/products/AnimeSci-fiFloatingCityDeskMat_78899644-8fa1-4274-905d-0bddfee649df.png?v=1673426780&amp;width=800',
//     },
//     {
//       id: 5,
//       name: 'Human Abduction Desk Mat and Gaming Mouse Pad',
//       price: 1099,
//       rating: 4,
//       image: '//coveritup.com/cdn/shop/products/HumanAbductionDeskMat_0bbc57e5-f767-44bb-a8c8-0322edbf6880.png?v=1673429693&amp;width=800' ,
//       hoverImage: '//coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=800" alt="Human Abduction Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=200 200w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=300 300w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=400 400w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=500 500w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=600 600w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=700 700w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=800 800w" width="585" height="315" loading="lazy" class="product-card__image product-card__image--secondary object-fill" fetchpriority="low" sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1680px) / 3 - (24px / 3 * 2))',
//     },
//     {
//       id: 6,
//       name: 'Colourful Cityscape Desk Mat and Gaming Mouse Pad',
//       price: 1499,
//       rating: 5,
//       image: '//coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=800" alt="Colourful Cityscape Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=200 200w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=300 300w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=400 400w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=500 500w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=600 600w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=700 700w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=800 800w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded',
//       hoverImage: '//coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=800" alt="Colourful Cityscape Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=200 200w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=300 300w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=400 400w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=500 500w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=600 600w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=700 700w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=800 800w" width="585" height="315" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
//     },
//     {
//       id: 7,
//       name: 'Ultimate Traders Desk Mat and Gaming Mouse Pad',
//       price: 1099,
//       rating: 3,
//       image: '//coveritup.com/cdn/shop/products/Layer47.png?v=1672745485&amp;width=720',
//       hoverImage: '//coveritup.com/cdn/shop/products/image_159.png?v=1672745485&amp;width=1080'
//     },
//     {
//       id: 8,
//       name: 'Football Pitch Desk Mat and Gaming Mouse Pad',
//       price: 999,
//       rating: 4,
//       image: '//coveritup.com/cdn/shop/products/Layer57.png?v=1672745460&amp;width=720',
//       hoverImage: '//coveritup.com/cdn/shop/products/Layer75_815a815e-4909-4032-ae6e-97cead9b6202.png?v=1672745460&amp;width=1080'
//     },
//     {
//       id: 9,
//       name: 'Mountains Are Calling Desk Mat and Gaming Mouse Pad',
//       price: 1599,
//       rating: 5,
//       image: '//coveritup.com/cdn/shop/products/Layer53.png?v=1672745526&amp;width=720',
//       hoverImage: '//coveritup.com/cdn/shop/products/Layer74_9b8ed6fb-f48d-4955-beea-0437bc405f20.png?v=1672745526&amp;width=1080'
//     }
//   ]);

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);
//     if (existingItem) {
//       // If the item already exists in the cart, increase its quantity
//       setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
//     } else {
//       // If the item is not in the cart, add it with quantity 1
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);
//     if (existingItem && existingItem.quantity > 1) {
//       // If the quantity is greater than 1, decrease the quantity
//       setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)));
//     } else {
//       // If the quantity is 1 or the item doesn't exist, remove it from the cart
//       setCart(cart.filter(item => item.id !== product.id));
//     }
//   };

//   const getTotalAmount = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const [sortType, setSortType] = useState('');

//   const handleSortChange = (e) => {
//     setSortType(e.target.value);
//   };

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortType === 'priceAsc') {
//       return a.price - b.price;
//     } else if (sortType === 'priceDesc') {
//       return b.price - a.price;
//     } else if (sortType === 'ratingDesc') {
//       return b.rating - a.rating;
//     } else {
//       return 0;
//     }
//   });

//   return (
//     <div className="img-main">
//       <img className="img-m" src="//coveritup.com/cdn/shop/collections/deskmat-banner.jpg?v=1685698789&amp;width=1600" />
//       <section id="product1" className="section-p1">
//         <h1 className="img-h1"><b>Choose Your Own Desk Mat</b></h1>
//         <div className="sorting">
//         <label htmlFor="sort" className="sort-by">Sort By: </label>
//         <select id="sort" onChange={handleSortChange} className="select-large">
//             <option value="">Select</option>
//             <option value="priceAsc">Price: Low to High</option>
//             <option value="priceDesc">Price: High to Low</option>
//             <option value="ratingDesc">Rating: High to Low</option>
//           </select>
//         </div>
//         <div className="pro-container">
//           {sortedProducts.map(product => (
//             <div key={product.id} className="pro">
//               <div className="image-wrapper">
//                 <img src={product.image} alt={product.name} />
//                 <div className="image-hover">
//                   <img src={product.hoverImage} alt={product.name} />
//                 </div>
//               </div>
//               <div className="des">
//                 <h4>{product.name}</h4>
//                 <div className="star">
//                   {[...Array(product.rating)].map((_, index) => (
//                     <i key={index} className="fas fa-star"></i>
//                   ))}
//                 </div>
//                 <h3>Rs. {product.price}</h3>
//                 <button className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button>
//                 {/* Display the quantity of the product in the cart */}
//                 {cart.find(item => item.id === product.id) && (
//                   <div className="quantity">Quantity: {cart.find(item => item.id === product.id).quantity}</div>
//                 )}
//               </div>
//               {/* <a href="#"><i className="fal fa-shopping-cart cart"></i></a> */}
//             </div>
//           ))}
//         </div>
//       </section>
//       <div className="parent-cart">
//       <div className="cart">
//         <h2>Cart 🛒</h2>
//         <ul>
//           {cart.map(item => (
//             <li key={item.id} className="cart-item">
//               <div className="cart-item-image">
//                 <img src={item.image} alt={item.name} />
//               </div>
//               <div className="cart-item-details">
//                 <div className='cart-item-card'>
//                   <span className="cart-item-name">{item.name}</span>
//                   <div className="quantity-controls">
//                     <button onClick={() => removeFromCart(item)}>-</button>
//                     <span className="cart-item-quantity">{item.quantity}</span>
//                     <button onClick={() => addToCart(item)}>+</button>
//                   </div>
//                   <span className="cart-item-amount">Amount: Rs. {item.price * item.quantity}</span>
//                 </div>
                
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="total-amount">Total Purchase: Rs. {getTotalAmount()}</div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default DeskMat;





import React, { useEffect, useState } from 'react';
import { handlePayNow } from '../utils';
// import axios from 'axios';
import './styles/Deskmat.css';

function DeskMat() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Worm Hole Desk Mat and Gaming Mouse Pad',
      price: 999,
      rating: 5,
      image: '//coveritup.com/cdn/shop/products/Layer26.png?v=1672744086&amp;width=720',
      hoverImage: '//coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=1080" alt="Worm Hole Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=200 200w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=300 300w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=400 400w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=500 500w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=600 600w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=700 700w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=800 800w, //coveritup.com/cdn/shop/products/Layer79_85e828df-5b30-403f-8f06-43215a34b99a.png?v=1672744086&amp;width=1000 1000w" width="585" height="315" loading="lazy" class="product-card__image product-card__image--secondary object-fill" fetchpriority="low" sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1680px) / 3 - (24px / 3 * 2))'
    },
    // Add more product data here...
    {
      id: 2,
      name: 'Fluid Art Purple Desk Mat and Gaming Mouse Pad',
      price: 1099,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=720" alt="Fluid Art Purple Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=200 200w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=300 300w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=400 400w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=500 500w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=600 600w, //coveritup.com/cdn/shop/products/image_17.png?v=1672744230&amp;width=700 700w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded"',
      hoverImage: '//coveritup.com/cdn/shop/products/Layer70_419f26ab-f655-4690-b78f-f02cc1c62c18.png?v=1672744230&amp;width=1080'
    },
    {
      id: 3,
      name: 'Cuteness Overload Desk Mat and Gaming Mouse Pad',
      price: 999,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/Layer43.png?v=1672744252&amp;width=720',
      hoverImage: '//coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=1080" alt="Cuteness Overload Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=200 200w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=300 300w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=400 400w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=500 500w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=600 600w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=700 700w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=800 800w, //coveritup.com/cdn/shop/products/Layer92_dd5d5f00-e108-4b6f-91e6-84ee2527a34e.png?v=1672744252&amp;width=1000 1000w" width="585" height="315" loading="lazy" class="product-card__image product-card__image--secondary object-fill" fetchpriority="low" sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1680px) / 3 - (24px / 3 * 2))'
    },
    {
      id: 4,
      name: 'Anime Sci-fi Floating City Desk Mat and Gaming Mouse Pad',
      price: 1499,
      rating: 3,
      image: '//coveritup.com/cdn/shop/products/AnimeSci-fiFloatingCityDeskMat_9a947886-e66b-4258-8d11-2dfbcebbaf1e.png?v=1673426780&amp;width=800',
      hoverImage: '//coveritup.com/cdn/shop/products/AnimeSci-fiFloatingCityDeskMat_78899644-8fa1-4274-905d-0bddfee649df.png?v=1673426780&amp;width=800',
    },
    {
      id: 5,
      name: 'Human Abduction Desk Mat and Gaming Mouse Pad',
      price: 1099,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/HumanAbductionDeskMat_0bbc57e5-f767-44bb-a8c8-0322edbf6880.png?v=1673429693&amp;width=800',
      hoverImage: '//coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=800" alt="Human Abduction Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=200 200w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=300 300w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=400 400w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=500 500w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=600 600w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=700 700w, //coveritup.com/cdn/shop/products/HumanAbductionDeskMat.png?v=1673429693&amp;width=800 800w" width="585" height="315" loading="lazy" class="product-card__image product-card__image--secondary object-fill" fetchpriority="low" sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1680px) / 3 - (24px / 3 * 2))',
    },
    {
      id: 6,
      name: 'Colourful Cityscape Desk Mat and Gaming Mouse Pad',
      price: 1499,
      rating: 5,
      image: '//coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=800" alt="Colourful Cityscape Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=200 200w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=300 300w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=400 400w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=500 500w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=600 600w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=700 700w, //coveritup.com/cdn/shop/products/COLORFULCITYSCAPE.png?v=1673429430&amp;width=800 800w" width="585" height="315" loading="eager" fetchpriority="high" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded',
      hoverImage: '//coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=800" alt="Colourful Cityscape Desk Mat and Gaming Mouse Pad" srcset="//coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=200 200w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=300 300w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=400 400w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=500 500w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=600 600w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=700 700w, //coveritup.com/cdn/shop/products/ColourfulCityscape_71125fe5-54da-4962-a014-a9e026facbc9.png?v=1673429430&amp;width=800 800w" width="585" height="315" loading="eager" fetchpriority="auto" sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(760px, 42vw)" class="rounded'
    },
    {
      id: 7,
      name: 'Ultimate Traders Desk Mat and Gaming Mouse Pad',
      price: 1099,
      rating: 3,
      image: '//coveritup.com/cdn/shop/products/Layer47.png?v=1672745485&amp;width=720',
      hoverImage: '//coveritup.com/cdn/shop/products/image_159.png?v=1672745485&amp;width=1080'
    },
    {
      id: 8,
      name: 'Football Pitch Desk Mat and Gaming Mouse Pad',
      price: 999,
      rating: 4,
      image: '//coveritup.com/cdn/shop/products/Layer57.png?v=1672745460&amp;width=720',
      hoverImage: '//coveritup.com/cdn/shop/products/Layer75_815a815e-4909-4032-ae6e-97cead9b6202.png?v=1672745460&amp;width=1080'
    },
    {
      id: 9,
      name: 'Mountains Are Calling Desk Mat and Gaming Mouse Pad',
      price: 1599,
      rating: 5,
      image: 'https://coveritup.com/cdn/shop/products/Layer53.png?v=1672745526&amp;width=720',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer53.png?v=1672745526&amp;width=720'
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
      <img className="img-m" src="//coveritup.com/cdn/shop/collections/deskmat-banner.jpg?v=1685698789&amp;width=1600" />
      <section id="product1" className="section-p1">
        <h1 className="img-h1"><b>Choose Your Own Desk Mat</b></h1>
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
                {cart.find(item => item.id === product.id) && (
                  <div className="quantity">Quantity: {cart.find(item => item.id === product.id).quantity}</div>
                )}
              </div>
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

export default DeskMat;
