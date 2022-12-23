import React from "react";
import Profile from "../../components/profile/Profile";
import { vision, vision2, office2, mission, office, ec_us_wdc_logo, ec_us_atlanta_logo, iimnlogo } from "../../components/workingwith/imports";
import "./about.css";

const About = () => {
  return (
    <div className="gr__about section__margin" id="about">
      <div className="gr__about-profile">
        <Profile
          img={<img src={office2} />}
          title="Who we are?"
          text="Our company, Get Relief, is a family-owned business located in the 
          St Paul City area of Minnesota and was established for the purpose of providing 
          community Profile, such as tax preparation, driver's license training, and any 
          other Profile you may need in the community at an affordable price. As a 
          community service organization, we provide assistance to Ethiopians, 
          Eritreans, and other immigrants who have been unable to make their way through 
          the American life style system due to language barriers, lack of knowledge, 
          technophobia, and economic circumstances. 
          The company is not only involved in the community service industry, but also
          intends to set up businesses in the near future that will provide landscaping,
           fall and spring cleaning, furniture manufacturing, and sales of top-notch
           quality, as well as creating job opportunities for new Americans. These
           businesses are also expected to create jobs for new Americans as well."
        />
      </div>

      <div className="gr__about-heading">
        <h1 className="gradient__text">
          Changing your focus from the problem to the solution will open up a
          world of possibilities that are beyond our wildest imaginations if you
          do it correctly.
        </h1>
        <p>Visit Our Library</p>
      </div>

      <div className="gr__about-container">
        <Profile
            img={<img src={vision} />}
          title="MISSION "
          text="As a company, our mission is to assist new Americans, especially Ethiopian 
        and Eritrean immigrants, in reaching self-sufficiency and becoming a full member
        of American society. As part of this mission, we will also help new Americans
        to find property, casualty, and life insurance as well as provide high quality,
        convenient and comprehensive driver education courses at the lowest possible
        price to create a safer, more secure community."
        />
        <Profile
            img={<img src={vision} />}
          title="VISION"
          text="Eritrean community, will be respected, supported, and be able to
          live safely, and that they will be able to reach their full potential
          in their new life and work."
        />
        <Profile
          img={<img src={vision2} />}
          title="FUTURE PLAN"
          text="As a part of this plan, in the future, we also plan to expand and set
         up additional profit making businesses that have a strong social mission which
         will create jobs for all of us, especially for those who have never experienced
          the American life style system, and help us address more problems, as well as
          provide advanced quality service at an affordable price. This is one of the
          core elements of our plan."
        />
      </div>
    </div>
  );
};

export default About;
