import React from "react";
import FormOptions from "./FormOptions";
import { IoIosAdd } from "react-icons/io";
import ImportForm from "./ImportForm";

const Sidebar = ({
  forms,
  exportFormJson,
  deleteForm,
  openForm,
  handleMenuClick,
}: any) => {
  return (
    <aside className="bg-white w-1/5 h-screen border-r-2 border-grey">
      <div className="p-4">
        <h2 className="text-lg">Forms</h2>
        <ul className="p-1 flex flex-col items-center justify-le gap-2">
          {forms.length === 0 && (
            <li className="border w-full flex justify-center items-center p-4">
              <span>No Forms</span>
            </li>
          )}
          {forms?.map((form: any, i: any) => {
            return (
              <FormOptions
                key={i}
                index={i}
                form={form}
                exportFormJson={exportFormJson}
                deleteForm={deleteForm}
                openForm={openForm}
              />
            );
          })}
          <li className="">
            <button
              onClick={() => handleMenuClick("addsection")}
              className="btn flex"
            >
              <IoIosAdd className="w-6 h-6" />
              <span>Create Form</span>
            </button>
          </li>
          <ImportForm />
        </ul>
      </div>
      {/* <div className="p-4">
        <h2 className="text-lg cursor-pointer" onClick={() => handleMenuClick("submissions")}>
          Submissions
        </h2>
      </div> */}
    </aside>
  );
};

export default Sidebar;
