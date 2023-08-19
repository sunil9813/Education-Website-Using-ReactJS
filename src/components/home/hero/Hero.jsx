import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            {/* <video
              id="background-video"
              autoplay
              loop
              muted
              poster="../public/assets/images/dhikr/recitation.jpg"
            >
              <source
                src="../public/assets/videos/recitation.mp4"
                type="video/mp4"
              ></source>
            </video> */}
            <Heading subtitle="MARHABAH!" title="Daar ul-Gharib" />
            <p>
              Daar ul-Gharib is a Queer, femme and non-binary focused mosque
              (masjid) with an emphasis on disabled and other marginalized
              persons. We provide religious and spiritual services, with special
              care and focus on those who otherwise do not have access to or
              would not feel welcomed using other masajid and community spaces.
            </p>
            <div className="button">
              <button className="primary-btn">
                LEARN MORE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                APPLY TO JOIN <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
