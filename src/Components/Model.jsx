import React from 'react'
import './styles/Model.css';
const Model = () => {
  return (
    <div className="model-body">
    <section className="final">
        <div className="heading1">
      <h1 style={{paddingTop: "1rem"}}><b>Phone Cases</b></h1>
      
    </div>
    <div className="heading2">
      <h2>QUICK  SEARCH</h2>
      <p>Make your very own case. Incredibly personal and completely unique!</p>
    </div>
    <div className="container">
      <h1>Welcome to our Phone Cover Site</h1>
      <form>
        <div className="select-box">
          <label for="phoneBrand">Choose your phone brand:</label>
          <select id="phoneBrand" name="phoneBrand">
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Google">Google</option>
            <option value="redmi">Redmi</option>
            <option value="OPPO">oppo</option>
            <option value="Nothing">Nothing</option>
            <option value="Vivo">vivo</option>

           Add more options as needed 
          </select>
        </div>
        <div className="select-box">
          <label for="phoneModel">Choose your phone model:</label>
          <select id="phoneModel" name="phoneModel">
            <option value="iPhone11"><a href="" >iPhone 11</a></option>
            <option value="GalaxyS20"> <a href="" >Samsung Galaxy S20</a></option>
            <option value="Pixel5"> <a href="" >Google Pixel 5</a></option>
            <option value="Iphone15"> <a href="" >Iphone15</a></option>
            <option value="oneplus12"> <a href="" >oneplus12</a></option>
            <option value="nothing1"> <a href="" >nothing1</a></option>
            <option value="samsung Z fold"> <a href="" >Samsung Z fold</a></option>
            Add more options as needed 
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
        <div className="grid-container">
            <div className="grid-item"> <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/AppleO.png?v=1581782752" alt="button 1" />
                <div className="dropdown">
                    <div className="dropdown-item"><a href="" >Iphone 15 pro</a></div>
                    <div className="dropdown-item"> <a href="" >Iphone 15</a></div>
                    <div className="dropdown-item"> <a href="" >Iphone 14 pro</a></div>
                    <div className="dropdown-item"> <a href="" >Iphone 14</a></div>
                    <div className="dropdown-item"> <a href="" >Iphone 13pro</a></div>
                </div></div>
            <div className="grid-item"><img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/SamsungO.png?v=1581782757" alt="button 2" />
                <div className="dropdown">
                    <div className="dropdown-item"> <a href="" >Samsung S24 ultra</a></div>
                    <div className="dropdown-item"> <a href="" >Samsung Fold</a></div>
                    <div className="dropdown-item"> <a href="" >Samsung flip</a></div>
                    <div className="dropdown-item"> <a href="" >Samsung 23</a></div>
                    <div className="dropdown-item"> <a href="" >Samsung A96</a></div>
                </div></div>
            <div className="grid-item"> <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/nothing.png?v=1662466136" alt="button 3" />
                <div className="dropdown">
                    <div className="dropdown-item"> <a href="#" >Nothing phone 1</a></div>
                    <div className="dropdown-item"><a href="#" >Nothing phone 2</a></div>
                    <div className="dropdown-item"><a href="#" >Nothing phone 2A</a></div>
                </div></div>
            <div className="grid-item"> <div className="grid-item">
                <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/OneO.png?v=1581782757" alt="button 4" /> 
                <div className="dropdown">
                    <div className="dropdown-item"> <a href="" >One plus 12</a></div>
                    <div className="dropdown-item"> <a href="" >One plus open</a></div>
                    <div className="dropdown-item"> <a href="" >one plus 11</a></div>
                    <div className="dropdown-item"> <a href="" >One plus Nord</a></div>
                </div>
            </div></div>
    
            <div className="grid-item"> <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/GoogleO.png?v=1581782754" alt="button 1" />
                <div className="dropdown">
                    <div className="dropdown-item"><a href="" >pixel 8</a></div>
                    <div className="dropdown-item"> <a href="" >pixel 8 pro</a></div>
                    <div className="dropdown-item"> <a href="" >pixel 7 pro</a></div>
                    <div className="dropdown-item"> <a href="" >pixel 7</a></div>
                    <div className="dropdown-item"> <a href="" >pixel 7a</a></div>
                </div></div>
            <div className="grid-item"> <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/OppoO.png?v=1581782757" alt="button 2" />
                <div className="dropdown">
                    <div className="dropdown-item"> <a href="" >oppo f23</a></div>
                    <div className="dropdown-item"> <a href="" >oppo a58</a></div>
                    <div className="dropdown-item"> <a href="" >oppo a78</a></div>
                    <div className="dropdown-item"> <a href="" >oppo reno 7</a></div>
                    <div className="dropdown-item"> <a href="" >oppo a1</a></div>
                </div></div>
                <div className="grid-item"> <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/MiO.png?v=1581782756" alt="button 3"/>
                    <div className="dropdown">
                        <div className="dropdown-item"> <a href="#" >redmi note 13 pro</a></div>
                        <div className="dropdown-item"><a href="#" >redmi note 12</a></div>
                        <div className="dropdown-item"><a href="#" >redmi note 11t pro</a></div>
                    </div></div>
                    <div className="grid-item"> <img src="https://cdn.shopify.com/s/files/1/0301/5131/1495/files/VivoO.png?v=1581782758" alt="button 3" />
                        <div className="dropdown">
                            <div className="dropdown-item"> <a href="#" >vivo y36</a></div>
                            <div className="dropdown-item"><a href="#" >vivo y35</a></div>
                            <div className="dropdown-item"><a href="#" >vivo y52</a></div>
                        </div>
                    </div>
    </div>
  </section>
  </div>
  )
}

export default Model
