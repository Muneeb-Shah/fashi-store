import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__heading">Contact US</h2>
        </div>
        <div className="contact-section__content">
          <div className="contact-section__detail">
            <h3>Email:</h3>
            <p>hello.colorlib@gmail.com</p>
          </div>
          <div className="contact-section__detail">
            <h3>Phone:</h3>
            <p>+65 11 188 8888</p>
          </div>
          <div className="contact-section__detail">
            <h3>Address:</h3>
            <p>Address: 60 Road 11378 New York</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
