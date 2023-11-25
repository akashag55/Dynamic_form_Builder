import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const FormOptions = ({ form, exportFormJson, index, deleteForm, openForm }: any) => {
  const { name, formData } = form;
  return (
    <li className="flex w-full items-center justify-between p-2">
      <h3 onClick={() => openForm(form)}>{form.name}</h3>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          <BsThreeDotsVertical />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-[100px]"
        >
          <li className="m-1 p-2" onClick={() => exportFormJson(index)}>
            Export
          </li>
          <li className="m-1 p-2" onClick={() => deleteForm(index)}>
            Delete
          </li>
        </ul>
      </div>
    </li>
  );
};

export default FormOptions;
