import React, { useEffect, useState } from "react";
import Job from "./Job";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.slice(0, 4)));
  }, []);

  const handleShowAll = () => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }

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
      <div id="jobs" className={`text-center my-3 ${jobs.length>=5?"hidden":""}`}>
      <button  onClick={handleShowAll} className="btn btn-primary btn-outline">Load More</button>
      </div>
    </div>
  );
};

export default Jobs;
