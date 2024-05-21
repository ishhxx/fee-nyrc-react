import React from 'react';
import './styles/innerpage.css'
function ProductDetails() {
    return (
        <section className='haha' style={{textAlign: 'left'}}>
            <div className="main" style={{display: 'flex', flexDirection: 'row', width: '90%', margin: 'auto'}}>
                <div className="left">
                    <img src="img.webp" alt="" style={{maxWidth: '90%', borderRadius: '48px'}} />
                </div>
                <div className="right">
                    <h2>Official Midnight Camo Glass Case</h2>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '-14px'}}>
                        <p style={{backgroundColor: 'rgb(6, 192, 6)', maxWidth: 'fit-content', color: 'white', padding: '8px', borderRadius: '24px', fontWeight: '800', marginRight: '25px'}}>BUY 2 @499</p>
                        <p style={{backgroundColor: 'rgb(6, 192, 6)', maxWidth: 'fit-content', color: 'white', padding: '8px', borderRadius: '24px', fontWeight: '800'}}>BUY 3 @599</p>
                    </div>
                    <p style={{color: 'green', fontWeight: '900'}}>Rs. 499<span style={{color: 'grey', fontWeight: '300', marginLeft: '24px'}}><s> Rs. 799</s></span><span style={{color: 'goldenrod', marginLeft: '320px'}}>4.9 ⭐</span></p>
                    <p><span style={{color: 'grey'}}>Style :</span> Purple Army</p>
                    <button type="submit" style={{backgroundColor: 'rgb(248, 114, 18)', color: 'white', width: '100%', height: '48px', border: 'none', borderRadius: '48px'}}>ADD TO CART</button>
                    <div className="offersnshipping" style={{display: 'flex', flexDirection: 'row', marginTop: '25px'}}>
                        <div className="offers" style={{backgroundColor: 'rgb(183, 235, 183)', maxWidth: 'fit-content', padding: '12px 24px', borderRadius: '24px', marginRight: '24px'}}>
                            <h3 style={{color: 'rgb(2, 133, 2)', fontWeight: 'bold'}}>Offers</h3>
                            <p style={{color: 'rgb(2, 133, 2)', fontWeight: '500'}}>Buy 2 Cases at Rs.799</p>
                            <p style={{color: 'rgb(2, 133, 2)', fontWeight: '500'}}>Buy 3 Cases at Rs.1099</p>
                            <p style={{color: 'rgb(2, 133, 2)', fontWeight: '500'}}>(No Coupon Needed)</p>
                        </div>
                        <div className="shipping" style={{backgroundColor: 'rgb(183, 235, 183)', maxWidth: '50%', padding: '12px 24px', borderRadius: '24px', marginRight: '-120px'}}>
                            <h3 style={{color: 'rgb(0, 0, 0)', fontWeight: 'bold'}}>Shipping</h3>
                            <p>This product will get shipped 📦 within 2-4 working days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;