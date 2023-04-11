import React, { useEffect, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { id } = useLoaderData();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch("../jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data[id - 1]));
  }, []);
  const {
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  if (job.length < 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="hero min-h-[40vh] bg-base-200">
        <h1 className="text-3xl font-bold">{company_name}</h1>
      </div>

      <div className=" lg:mt-32 flex justify-evenly flex-wrap">
        <div className="w-[850px]">
          <p className=" font-light">
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>
          <p className=" font-light">
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p className="font-bold">Educational Requirements:</p>
          <p className=" font-light">{educational_requirements}</p>
          <p className="font-bold">Experiences:</p>
          <p className=" font-light">{experiences}</p>
        </div>
        <div className="w-[425px] h-[460px] p-8 bg-base-300 rounded-xl">
          <h1 className="text-xl my-4 font-bold">Job Details</h1>
          <hr />
          <p className=" font-thin flex py-2">
            <RiMoneyDollarCircleLine className="text-2xl mr-1" />
            <span className="font-bold mr-1">Salary:</span> {salary}
          </p>
          <p className=" font-thin flex py-2">
            <BsPersonWorkspace className="text-2xl mr-1" />
            <span className="font-bold mr-1">Job Title:</span>
            {job_title}
          </p>

          <div>
            {contact_information && (
              <div>
                <p className="text-xl my-4 font-bold">Contact Information</p>
                <hr />
                <p>{contact_information[0].phone}</p>
                <p>{contact_information[0].email}</p>
              </div>
            )}

            {/* { 
                contact_information?.map((info) => {
                    <p>{info?.email}</p>
                })
            } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
