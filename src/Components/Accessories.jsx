import React from 'react'
import { Link } from 'react-router-dom'

const Accessories = () => {
  return (
    <div className="Accessories">
        <h1><b>Accessories</b></h1>
        <img src="/image/deskmat-banner_91d314ed-25ca-45bc-a7cb-676dbb0bc348.webp" alt="Accessories" width="90%" />
        <h2><b>Desk Mats</b></h2>
        <Link to="/deskmat"><button><b>Shop Now</b></button></Link>
    </div>
  )
}

export default Accessories
