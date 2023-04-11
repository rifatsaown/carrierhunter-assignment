import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import { getStoredCart } from "./utilities/fakedb";

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
  return (
    <div>
      <div className="hero min-h-[20vh] bg-base-200">
        <h1 className="text-3xl font-bold">Applied Jobs</h1>
      </div>
      {jobs.length === 0 ? (
        <div>No jobs applied yet</div>
      ) : (
        jobs.map((job, index) => <AppliedJob job={job} key={index} />)
      )}
    </div>
  );
};

export default Appliedjobs;
