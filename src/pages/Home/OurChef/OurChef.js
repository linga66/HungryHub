import React from 'react'
import './OurChef.css'

const OurChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Award winning meals, delivered by an amazing team
                    </p>
                </div>
            </div>
        </div>

        {/* chef info  */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Linga <span>Sreeja</span>
                    </h3>

                    <h4>grill chef</h4>

                    <p>Grilling is not just about cooking food; it's about creating a symphony of flavors with every sizzle and sear.</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Bhuvan <span>Chand</span>
                    </h3>

                    <h4>executive chef</h4>

                    <p>My culinary philosophy is centered on innovation, using the freshest ingredients to craft memorable dining experiences that not only satisfy the palate but also ignite the imagination of our guests.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Linga <span>Ashok</span>
                    </h3>

                    <h4>CHEF DE CUISINE</h4>

                    <p>My role is all about orchestrating the kitchen, ensuring every dish leaves our pass with precision and passion, while constantly pushing the boundaries of culinary creativity.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Naga <span>Lakshmi</span>
                    </h3>

                    <h4>sous chef</h4>

                    <p>I see my role as the backbone of the kitchen, supporting the head chef in executing their vision and maintaining the highest standards of quality and consistency in every dish we serve.</p>
                </div>
            </div>




        </div>
    </div>
  )
}

export default OurChef