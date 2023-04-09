import React from "react";
import profile from "./assets/Images/P3OLGJ1.png";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={profile} className=" lg:max-w-2xl rounded-lg lg:mb-[-20px] " />
          <div className="max-w-[570px]">
            <h1 className="text-6xl font-bold lg:max-w-[330px]">
              One Step Closer To Your
              <span className="text-primary"> Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
