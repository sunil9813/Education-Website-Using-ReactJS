import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Contact us</h1>
            <p>
              Feel free to contact us at our email or send a message to our
              inbox using the form below!
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>EMAIL:</h4>
                <p> daar.ul.gharib@gmail.com</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us on social media!</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
