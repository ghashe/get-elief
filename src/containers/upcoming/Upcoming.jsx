import React from "react";
import { FuturePlan } from "../../components";
import "./upcoming.css";

const futureServicesData = [
  {
    title: "Expanding services to new locations within Minnesota:",
    text: "Our company is committed to making our services accessible to as many immigrants as possible. We plan to expand our reach to more cities and towns within the state, bringing our expertise and resources to even more communities.",
  },

  {
    title: "Offering new types of services:",
    text: "We are constantly looking for ways to better serve our clients and meet their needs. In the future, we plan to offer additional services such as legal assistance, job training and placement, and language classes.",
  },

  {
    title: "Building partnerships with community organizations:",
    text: "We believe in the power of collaboration and are committed to working with other organizations that serve immigrants in Minnesota. By forming partnerships with these groups, we can better serve our clients and have a greater impact on the immigrant community.",
  },

  {
    title: "Hosting events and workshops: ",
    text: " We plan to host regular events and workshops to provide information, resources, and support to immigrants in Minnesota. These events will cover topics such as navigating the immigration process, adapting to life in a new country, and building professional networks.",
  },

  {
    title: "Advocating for immigrant rights:",
    text: "We believe that all immigrants deserve to be treated with dignity and respect, and we will continue to advocate for policies and practices that protect and promote the rights of immigrants in Minnesota and beyond.",
  },
];

const Upcoming = () => {
  return (
    <section class="services">
      <div class="s-heading">
        <h1>
          Ser<font color="#4a90e2">vic</font>es
        </h1>
        <p>
          Welcome to our Services for Immigrants page! We are dedicated to
          providing high-quality support and assistance to immigrants in
          Minnesota, with a particular focus on serving the Ethiopian and
          Eritrean communities. Our team is here to help you navigate the
          complex process of settling in a new country and building a life in
          the United States. Below, you will find information on the services we
          offer to immigrants in Minnesota. If you have any questions or would
          like more information, please don't hesitate to contact us.
        </p>
      </div>
      <div class="service-container" id="s-one">
        <div class="s-heading-container">
          <h1>
          Immigration <font color="#4a90e2">Legal</font> Services
          </h1>
          {/* <p>We Provide The Best In Class Servies For Our Customers</p> */}
        </div>

        <div class="s-box-container">
          <div class="bar"></div>

          <div class="s-box">
            <div class="bar"></div>
            <h1>Green Card Applications </h1>

            <p>
              We can help you apply for a green card, which allows you to live
              and work in the United States permanently.
            </p>
          </div>

          <div class="s-box">
            <div class="bar"></div>

            <h1>Citizenship Applications: </h1>

            <p>
              Are you ready to take the next step and become a U.S. citizen? We
              can help you with the citizenship application process. Family
              Reunification: If you have family members who are still abroad and
              you would like to bring them to the United States, we can assist
              with the process of reuniting your family.
            </p>
          </div>

          <div class="s-box">
            <div class="bar"></div>

            <h1>Family Reunification: </h1>

            <p>
              If you have family members who are still abroad and you would like
              to bring them to the United States, we can assist with the process
              of reuniting your family.
            </p>
          </div>

          <div class="s-box">
            <div class="bar"></div>
            <h1>Deportation Defense</h1>

            <p>
              If you are facing deportation, we can provide legal representation
              and assistance to help you stay in the United States.
            </p>
          </div>
        </div>
      </div>

      <div class="service-container">
        <div class="s-heading-container">
          <h1>
           Community <font color="#4a90e2">Support</font> Services
          </h1>
          {/* <p>We Provide The Best In Class Servies For Our Customers</p> */}
        </div>

        <div class="s-box-container">
          <div class="s-box">
            <div class="bar"></div>
            <h1>Cultural Orientation </h1>

            <p>
              Adjusting to life in a new country can be challenging, and we
              understand that cultural differences can make the transition even
              harder. Our cultural orientation services can help you understand
              the customs and expectations of life in the United States.
            </p>
          </div>

          <div class="s-box">
            <div class="bar"></div>

            <h1>English Language Classes</h1>

            <p>
              : We offer English language classes for immigrants at all levels,
              from beginner to advanced. Our experienced instructors will help
              you improve your English language skills and better communicate
              with your new community.
            </p>
          </div>

          <div class="s-box">
            <div class="bar"></div>

            <h1>Community Outreach</h1>

            <p>
              : We are committed to supporting the immigrant community in
              Minnesota, and we offer a variety of outreach programs and events.
              From cultural festivals to educational workshops, we strive to
              build a strong, supportive community for immigrants in the state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
