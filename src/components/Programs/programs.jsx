import React from "react";
import "./programs.css";
import program_1 from "../../assets/program_1.avif";
import program_2 from "../../assets/program_2.avif";
import program_3 from "../../assets/program_3.avif";
import program_4 from "../../assets/program_4.avif";
import program_5 from "../../assets/program_5.avif";
import program_6 from "../../assets/program_6.avif";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <h3>Web Development</h3>
          <p>
            Design clean, attractive and unique websites that give you wow
            experience. This is unlike a traditional application that runs on
            your computer, tablet, or phone.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <h3>Digital Promotion</h3>
          <p>
            In order to rank higher, a website must meet the technical
            requirements set by modern search engines.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <h3>Connectivity Solutions</h3>
          <p>
            We provide members with speed, connectivity, and value by solving
            business challenges and problems that are otherwise impossible to
            solve.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
          <h3>Web Hosting</h3>
          <p>
            The service of web hosting allows individuals or organizations to
            post their websites online.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_5} alt="" />
        <div className="caption">
          <h3>Mobile App Deployment</h3>
          <p>
            Build integrated mobile applications that suits your vision and
            need. Modern smartphones come with unique features that can be
            customized for mobile applications.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_6} alt="" />
        <div className="caption">
          <h3>Penetration Testing</h3>
          <p>
            Your WAF security policies can be fine-tuned and vulnerabilities can
            be patched based on insights provided by the penetration test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
