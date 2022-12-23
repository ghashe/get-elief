import React from "react";
import "./workingwith.css";
import { ec_us_mn_logo, ec_us_wdc_logo, ec_us_atlanta_logo, iimnlogo } from "./imports";

const Workingwith = () => {
  return (
<div className="gr__workingwith-cont">
      
<div id="working-with-title">
  <h2>The companies and associations we plan to work with in the future</h2> 
</div>

    <div className="gr__workingwith section__padding">

      <div id="ec__us__mn">
        <a
          href="https://ethiopiancommunitymn.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ec_us_mn_logo} alt="" />
        </a>
      </div>

      <div id="ec__us__wdc">
        <a
          href="https://www.ethiopiancommunitydc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
     
          <img src={ec_us_wdc_logo} alt="" />
        </a>
      </div>

      <div id="ec__us__atlanta">
        <a
          href="https://ethiopiancaa.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
     
          <img src={ec_us_atlanta_logo} alt="" />
        </a>
      </div>

      <div id="iimn">
      <a
          href=" https://iimn.org/"
          target="_blank"
          rel="noopener noreferrer"
        >

  
          <img src={iimnlogo} alt="" />
        </a>
      </div>
      </div>
    
    
    
    </div>
  );
};

export default Workingwith;
