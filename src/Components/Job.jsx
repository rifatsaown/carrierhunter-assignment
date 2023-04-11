import React from "react";
import { GoLocation } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const Job = ({ job }) => {
  const {
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
    id,
  } = job;

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/jobs/${id}`)
  }


  return (
    <div className=" lg:w-[650px] lg:h-[400px] p-8 border border-gray-800 m-2">
      <img className="h-10" src={company_logo} alt={company_name} />
      <h3 className="text-2xl font-bold pt-6">{job_title}</h3>
      <p className="my-3 text-lg font-semibold">{company_name}</p>
      <div>
        <p className="btn btn-outline">{remote_or_onsite}</p>
        <p className="btn btn-outline ml-4">{fulltime_or_parttime}</p>
      </div> 
      <div className="flex py-4">
        <p className="flex">
          <GoLocation className="text-xl mr-1 text-[#67696b]"/>
          {location}
        </p>
        <p className="ml-9 flex"> <RiMoneyDollarCircleLine className="text-2xl mr-1 text-[#67696b]"/> {salary}</p>
      </div>
      <button onClick={handleDetails} className="btn btn-secondary">View Details</button>
    </div>
  );
};

export default Job;
