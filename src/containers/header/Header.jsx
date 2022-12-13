import React from "react";
import "./header.css";
import worker from "../../assets/GetReliefCompanyLogo.png";
const Header = () => {
  return (
    <div className="gr__header section__padding">
      <div className="gr__header-content">
        <h1 className="gradeient__text">
          It is our goal to help you find a solution for almost any issue you
          may have!
        </h1>
        <p>
          When it comes to problems, I believe that a problem on its own is not
          a problem. Instead, it is merely a stepping stone that leads us to
          success and opens up a wide variety of possibilities. This allows us
          to discover new possibilities even as we are trying to solve the
          problem itself. However, if the problem isn't figured out and managed
          on time, it will turn into a problem and negatively impact our lives.
          You should never ignore any of your problems. It doesn't matter how
          severe your problem is, we sell solutions for almost any problem you
          have, and yes, everyone has something that they need to solve. All you
          need to do is come to us and let us work on your problem and it will
          be gone forever, and we will get you back in your truck in no time at
          all, then you will start to live a stress-free life.
        </p>
        <p>
          <h2>So What are you waiting for?</h2>
        </p>

        <div className="gr__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started </button>
        </div>

        <div className="gr__header-content__services">
          <ul>
            <h2>Sercices</h2>

            <li>
              <a href="">Auto Insurance</a>
            </li>
            <li>
              <a href="">Health insurance</a>
            </li>
            <li>
              <a href="">Help build credit</a>
            </li>
            <li>
              <a href="">Tax filing</a>
            </li>
            <li>
              <a href="">Document processing </a>
            </li>
            <li>
              <a href="">Children school related solutions</a>
            </li>
            <li>
              <a href="">A loan application assistance service</a>
            </li>

            <li>
              <a href="">Loan refinance application assistance</a>
            </li>
            <li>
              <a href=""> An auto buying guide</a>
            </li>
            <li>
              <a href="">Driving training services</a>
            </li>
          </ul>

          <div className="gr__header-image">
            <img src={worker} alt="worker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
