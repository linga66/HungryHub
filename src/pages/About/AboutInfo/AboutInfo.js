import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
              At <span className="special-word">HungryHub</span>, we believe that dining is not just about food; it's about creating memories. Our friendly and attentive staff are here to ensure your visit is nothing short of exceptional. Whether you're celebrating a special occasion, enjoying a romantic dinner for two, or simply looking for a delicious meal with friends and family, we aim to provide top-notch service that enhances your dining experience.
            </p>

            <blockquote>
              No mass or weighty consequence wanted. Therefore, let there be an undertaking
            </blockquote>

            <p>
              We are also committed to sustainability and giving back to our community. We partner with local farmers and producers to reduce our environmental footprint and support the growth of our region.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO WINE, A PLACE <span>TO DINE</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Thank you for choosing <span className="special-word">HungryHub</span>, for your dining adventure. We look forward to serving you and becoming a memorable part of your culinary journey.
            </p>

            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </blockquote>

            <p>
              Feel free to customize this description to match the unique features and offerings of your specific restaurant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
