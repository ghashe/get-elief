import React from "react";
import {
  vision,
  vision2,
  focus3,
  focus4,
  office2,
  focus0,
  focus1,
  focus2,
  mission,
  future1,
  office,
  ec_us_wdc_logo,
  ec_us_atlanta_logo,
  iimnlogo,
} from "../../components/workingwith/imports";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="mvv-contianer">
    
        <section class="content list_page">
          <article id="post-65">
            <div className="list_img">
              <img src={focus0} alt="" />
            </div>
            <h1 className="list_text gradient__text message">
              Changing your focus from the problem to the solution will open up
              a world of possibilities that are beyond our wildest imaginations
              if you do it correctly.
            </h1>
            <h2>
              Have you ever wondered that your problem is a living to others,
              and their problems are a living to you?
            </h2>
            <p>
              As far as earning a living is concerned, you must find someone who
              has a problem that creates a living for you, and you must
              therefore find that individual and they must also find something
              that will provide a living to them, because as much as you need
              them for a living, you must also provide them with something for a
              living as well, because you live on someone else's problem and you
              must also live on your own problem. Your problem is thus the
              source of your own living since it provides a living for the
              people who provide you with a living for you as well.
            </p>
          </article>

          <article id="post-66">
            <div class="list_img">
              <img src={office2} alt="" />
            </div>
            <div class="list_text">
              <h5>WHO WE ARE</h5>
              <p>
                Our company, Get Relief, is a family-owned business located in
                the St Paul City area of Minnesota and was established for the
                purpose of providing community Profile, such as tax preparation,
                driver's license training, and any other Profile you may need in
                the community at an affordable price. As a community service
                organization, we provide assistance to Ethiopians, Eritreans,
                and other immigrants who have been unable to make their way
                through the American life style system due to language barriers,
                lack of knowledge, technophobia, and economic circumstances. The
                company is not only involved in the community service industry,
                but also intends to set up businesses in the near future that
                will provide landscaping, fall and spring cleaning, furniture
                manufacturing, and sales of top-notch quality, as well as
                creating job opportunities for new Americans. These businesses
                are also expected to create jobs for new Americans as well.
              </p>
            </div>
          </article>

          <article id="post-67">
            <div class="list_img">
              <img src={mission} alt="" />
            </div>
            <div class="list_text">
              <h5>MISSION</h5>
              <p>
                <p>
                  As a company, our mission is to assist new Americans,
                  especially Ethiopian and Eritrean immigrants, in reaching
                  self-sufficiency and becoming a full member of American
                  society. As part of this mission, we will also help new
                  Americans to find property, casualty, and life insurance as
                  well as provide high quality, convenient and comprehensive
                  driver education courses at the lowest possible price to
                  create a safer, more secure community."
                </p>
              </p>
            </div>
          </article>

          <article id="post-68">
            <div class="list_img">
              <img src={focus4} alt="" />
            </div>
            <div class="list_text">
              <h5>VISION</h5>
              <p>
                <p>
                  We envision a better future in which the new American
                  community, particularly the Ethiopian and Eritrean community,
                  will be respected, supported, and be able to live safely, and
                  that they will be able to reach their full potential in their
                  new life and work.
                </p>
              </p>
            </div>
          </article>

          <article id="post-69">
            <div class="list_img">
              <img src={future1} alt="" />
            </div>
            <div class="list_text">
              <h5>FUTURE PLAN</h5>
              <p>
                <p>
                  As a part of this plan, in the future, we also plan to expand
                  and set up additional profit making businesses that have a
                  strong social mission which will create jobs for all of us,
                  especially for those who have never experienced the American
                  life style system, and help us address more problems, as well
                  as provide advanced quality service at an affordable price.
                  This is one of the core elements of our plan.
                </p>
              </p>
            </div>
          </article>
        </section>

    </div>
  );
};

export default Aboutus;
