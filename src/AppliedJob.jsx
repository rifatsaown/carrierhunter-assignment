import React from "react";
import { GoLocation } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    company_name,
    location,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    id,
  } = job;
  
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/jobs/${id}`)
  }


  return (
    <div>

      <div className=" mt-5">
        <div className="flex justify-between items-center border border-primary-focus rounded-xl p-4 lg:mx-80">
          <div className="lg:flex items-center">
            <div className="m-4 w-40">
              <img className="" src={job.company_logo} alt="Company Logo" />
            </div>
            <div className="ml-4">
              <div className="">
                <h2 className="card-title py-2">{job_title}</h2>
                <p className="pb-2">{company_name}</p>
                <div className="pb-2">
                  <p className="btn btn-outline">{remote_or_onsite}</p>
                  <p className="btn btn-outline ml-2">{fulltime_or_parttime}</p>
                </div>
                <div className="flex mt-2">
                  <p className=" flex mr-7"> <GoLocation className="text-xl mr-1 text-[#05a5eb]"/> {location}</p>
                  <p className="flex"><RiMoneyDollarCircleLine className="text-2xl mr-1 text-[#05a5eb]"/> {salary}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button onClick={handleDetails} className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
