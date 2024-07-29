import React, { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.jpg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx <= -75) {
      tx = 0;
    } else {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx >= 0) {
      tx = -75;
    } else {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Amrit Thapa</h3>
                  <span>Director at Softwarica College</span>
                </div>
              </div>
              <p>
                Always available, extremely knowledgeable, and a tremendous
                "can-do" attitude. Techy Lads company was on a tight timeline
                and strict budget to create a first-class outcome. Their
                guidance and advice was invaluable in producing profit which
                easily exceeded my expectations... the entire company was
                thrilled with it! Without any hesitation... highly Recommended
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Roshan Shrestha</h3>
                  <span>Business Owner</span>
                </div>
              </div>
              <p>
                "They had a high level of technical proficiency and were able to
                handle complex tasks. so, I am highly impressed with the
                services given by “Techy Lads Solutions
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Binod Thapa</h3>
                  <span>President at Everest Base Camp</span>
                </div>
              </div>
              <p>
                Right guidance and strong support are the essence of the
                consulting company which we are getting from the Techy Lads
                Solution. They are providing accurate guidance in the E-Commerce
                Management and other compliance services.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Prakash Shrestha</h3>
                  <span>Business Owner</span>
                </div>
              </div>
              <p>
                TechyLads is a great place to explore and develop your
                professional skills, The management team seems to care about
                their employees. A good office environment is one of the best
                companies to work for. and training also good, Training for each
                domain also great
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
