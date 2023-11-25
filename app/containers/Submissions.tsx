import React, { useContext } from "react";
import { FormContext } from "../context";
const Submissions = () => {
  const { submission } = useContext(FormContext);
  console.log("submissions", submission);
  return (
    <div className="p-3 bg-white h-screen">
      <div className="flex items-center justify-between w-full"></div>
      <p className="text-xl pb-5">Configure New Form Fields</p>
      <div className="border border-grey bg-white">
        <div className="p-4">
          <div className="flex flex-row justify-between form-control w-full">
            <div>
              <h1>Submissions</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
