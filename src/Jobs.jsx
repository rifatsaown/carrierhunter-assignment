import React, { useContext } from "react";
import { LevelContext } from "./Home";
import Job from "./Job";

const Jobs = () => {
  const jobs = useContext(LevelContext);
  return (
    <div>
      <div className="text-center mt-32 mb-8" id="jobs">
        <h1 className="text-4xl font-bold mb-2">Featured Jobs</h1>
        <p className="mx-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 gap-4">
        {jobs.map((job, index) => (
          <Job key={index} job={job}></Job>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Jobs;
