"use client";
import popupSubImg from '@/assets/img/normal/popup_subscribe.jpg';
import Image from 'next/image';
import React from 'react';

const PopupSubscribeArea: React.FC = () => {
  return (
    <div className="popup-subscribe-area">
      <div className="container">
        <div className="popup-subscribe">
          <div className="box-img">
            <Image src={popupSubImg} alt="Image" width={500} height={500} />
          </div>
          <div className="box-content">
            <button className="simple-icon popupClose"><i className="fal fa-times"></i></button>
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Subscribe</h3>
              <p className="footer-text">Sign up to get update about us. Don&apos;t be hasitate your email is safe.</p>
              <form className="newsletter-form">
                <input className="form-control" type="email" placeholder="Enter Email" required />
                <button type="submit" className="icon-btn"><i className="fa-solid fa-paper-plane"></i></button>
              </form>
              <div className="mt-30">
                <input type="checkbox" id="destroyPopup" />
                <label htmlFor="destroyPopup">I don&apos;t want to see this popup again.</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PopupSubscribeArea;