import React from "react";
import { MdAccountTree, MdOutlineEngineering } from "react-icons/md";
import { TbBulb, TbSocial } from "react-icons/tb";
const Category = () => {
  return (
    <div>
      <div className="text-center mt-32 mb-8">
        <h1 className="text-4xl font-bold mb-3"> Job Category List </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-evenly items-center">
        <div className=" bg-slate-800 rounded-lg w-60 h-44 flex justify-center items-center">
          <div>
            <div className="text-3xl text-white bg-primary-focus w-fit p-1 rounded-lg mb-2">
              <MdAccountTree />
            </div>
            <h3 className="text-xl font-semibold">Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
        </div>
        <div className=" bg-slate-800 rounded-lg w-60 h-44 flex justify-center items-center">
          <div>
            <div className="text-3xl text-white bg-primary-focus w-fit p-1 rounded-lg mb-2">
              <TbBulb />
            </div>
            <h3 className="text-xl font-semibold">Creative Design</h3>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className=" bg-slate-800 rounded-lg w-60 h-44 flex justify-center items-center">
          <div>
            <div className="text-3xl text-white bg-primary-focus w-fit p-1 rounded-lg mb-2">
              <TbSocial />
            </div>
            <h3 className="text-xl font-semibold">Marketing & Sales</h3>
            <p>150 Jobs Available</p>
          </div>
        </div>
        <div className=" bg-slate-800 rounded-lg w-60 h-44 flex justify-center items-center">
          <div>
            <div className="text-3xl text-white bg-primary-focus w-fit p-1 rounded-lg mb-2">
              <MdOutlineEngineering />
            </div>
            <h3 className="text-xl font-semibold">Engineering Job</h3>
            <p>225 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
