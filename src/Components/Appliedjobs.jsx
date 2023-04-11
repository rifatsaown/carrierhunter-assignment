import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utilities/fakedb";
import AppliedJob from "./AppliedJob";

const Appliedjobs = () => {
  const [jobs, setJobs] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const appliedJobs = getStoredCart();
    const jobs = [];
    for (const key in appliedJobs) {
      const job = data.find((job) => job.id == key);
      if (job) {
        jobs.push(job);
      }
    }
    setJobs(jobs);
  }, []);

  const handleSort = (props) => {
    const appliedJobs = getStoredCart();
    const jobs = [];
    for (const key in appliedJobs) {
      const job = data.find((job) => job.id == key);
      if (job) {
        jobs.push(job);
      }
    }
    const sortJobs = jobs.filter((job) => job.remote_or_onsite === props);
    setJobs(sortJobs);
  };

  return (
    <div>
      <div className="hero min-h-[20vh] bg-base-200">
        <h1 className="text-3xl font-bold">Applied Jobs</h1>
      </div>
      <div>
        {jobs.length === 0 ? (
          <div className="text-center">
            <div className="text-primary text-2xl font-bold my-8">
              No Job Applied Yet
            </div>
            <Link to="/" className="btn btn-wide btn-primary">
              Apply Now
            </Link>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <button
                onClick={() => handleSort("Onsite")}
                className="btn btn-secondary mr-4 mt-4"
              >
                Onsite
              </button>
              <button
                onClick={() => handleSort("Remote")}
                className="btn btn-secondary"
              >
                Remote
              </button>
            </div>
            {jobs.map((job, index) => (
              <AppliedJob job={job} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appliedjobs;
