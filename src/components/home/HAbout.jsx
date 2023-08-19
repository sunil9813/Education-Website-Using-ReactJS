import React from "react";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { servicesCards } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading subtitle="what we offer" title="explore our services" />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {servicesCards.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>

                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <>
                            <div className="box">
                              {/* <div className="dimg">
                                <img src={details.dcover} alt="" />
                              </div> */}
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.price}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>{val.offer}</h3>
                  </div>
                  {/* <button className="outline-btn"></button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
