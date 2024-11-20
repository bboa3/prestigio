import contact11Img from '@assets/img/icon/contact_1_1.svg';
import contact12Img from '@assets/img/icon/contact_1_2.svg';
import contact13Img from '@assets/img/icon/contact_1_3.svg';
import Image from 'next/image';
import React from 'react';

const Contact: React.FC = () => {

  return (
    <div className="space2">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="pe-xxl-4 me-xl-3 text-center text-xl-start mb-40 mb-lg-0">
              <div className="title-area mb-32">
                <h2 className="sec-title2">Get in Touch</h2>
                <p className="sec-text">Aliquam erat volutpat. Morbi sed lectus volutpat nulla laoreet maximus vel ac nulla. Maecenas ullamcorper felis</p>
              </div>
              <div className="contact-feature-wrap">
                <div className="contact-feature">
                  <div className="box-icon">
                    <Image src={contact11Img} alt="icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title-22">Our Address</h3>
                    <p className="box-text">Street Parker Rd. Allentown, New Mexico 31134 </p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="box-icon">
                    <Image src={contact12Img} alt="icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title-22">Email Address</h3>
                    <p className="box-text">
                      <a href="mailto:needhelp@gmail.com">needhelp@gmail.com</a>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="box-icon">
                    <Image src={contact13Img} alt="icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title-22">Phone Number</h3>
                    <p className="box-text">
                      <a href="tel:+1234055550128">+123 (405) 555-0128</a>
                      <a href="tel:+7025550122">(702) 555-0122</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="quote-form-box">
              <h4 className="form-title">Send Message</h4>
              <form action="mail.php" method="POST" className="contact-form ajax-contact">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                  </div>
                  <div className="form-group col-md-6">
                    <select name="subject" id="subject" className="form-select">
                      <option value="" disabled selected hidden>Select Subject</option>
                      <option value="Writing Article">Writing Article</option>
                      <option value="Become Author">Become Author</option>
                      <option value="Gest Posting">Gest Posting</option>
                      <option value="Personal Question">Personal Question</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Your Message"></textarea>
                  </div>
                  <div className="form-btn col-12">
                    <button className="th-btn">Submit Now<i className="fas fa-arrow-up-right ms-2"></i></button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;