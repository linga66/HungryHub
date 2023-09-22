import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/cheese2.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AddToCart from './AddToCart/AddToCart'

const Delivery = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["eat at ", <span>Home</span>]}
        text="Delivery avialable Mon – Fri, 10am – 11pm"
      />
      <DeliveryInfo />
      <AddToCart />
    </div>
  )
}

export default Delivery