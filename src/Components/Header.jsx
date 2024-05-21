import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <div className="logo">
                <img src="/image/8xsq61mp.png" alt="NYRC" width="195px" height="80px" />
            </div>
            <div className="hover">
                <ul>
                    <li><Link to="/camo"><b>Phone&nbsp;Cases</b></Link></li>
                    <li><Link to="/deskmat"><b>Accessories</b></Link></li>
                    <li><Link to="/hoodies"><b>Clothing</b></Link></li>
                    <li><Link to="/phone"><b>Collection</b></Link></li>
                    <li><Link to="/customise"><b>Customise</b></Link></li>
                </ul>
            </div>

            
            <div id="login">
                <Link to="/login"><button>Login <img src="/image/download.png" alt="Logins" /></button></Link>
            </div>
        </nav>
    </header>
  )
}

export default Header;
