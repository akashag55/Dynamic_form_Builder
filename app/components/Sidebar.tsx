import React from "react";
import FormOptions from "./FormOptions";

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
        <ul className="p-1 flex flex-col items-center justify-le">
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
              className="flex w-max bg-blue p-2 m-2 rounded text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>{" "}
              Create Form
            </button>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-lg cursor-pointer" onClick={() => handleMenuClick("submissions")}>
          Submissions
        </h2>
      </div>
    </aside>
  );
};

export default Sidebar;
