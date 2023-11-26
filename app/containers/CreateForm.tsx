import React, { useState, useEffect, useContext } from "react";
import { InputSwitch, InputValidation } from "../components";
import { FormContext } from "../context";

const CreateForm = () => {
  const initialState = [
    {
      name: "",
      type: "text",
      values: ["", ""],
      required: true,
      isValidationTrue: true,
      validation: {},
    },
  ];
  const { addForm } = useContext(FormContext);
  const [sectionDetails, setFormDetaild] = useState({
    formName: "",
    description: "",
  });
  const [formFields, setFormFields] = useState<any>(initialState);

  const handleChange = (index?: any, event?: any) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedFormFields = [...formFields];
      updatedFormFields[index][name] = checked;
      setFormFields(updatedFormFields);
    } else {
      const updatedFormFields = [...formFields];
      updatedFormFields[index][name] = value;
      setFormFields(updatedFormFields);
    }
  };

  const handleSectionDetailsChange = (e: any) => {
    const { name, value } = e.target;
    // console.log(value);
    setFormDetaild({ ...sectionDetails, [name]: value });
  };

  const handleAddFields = () => {
    setFormFields([
      ...formFields,
      {
        name: "",
        type: "text",
        values: ["", ""],
        required: true,
        isValidationTrue: false,
        validation: {},
      },
    ]);
  };

  const handleValidationChange = (index: any, validation: any) => {
    const updatedFormFields = [...formFields];
    updatedFormFields[index]["validation"] = validation;
    console.log("updatedFormFields - ", updatedFormFields);
    setFormFields(updatedFormFields);
  };

  const handleRemoveFields = (index: any) => {
    const values = [...formFields];
    console.log("index removed", index);
    values.splice(index, 1);
    setFormFields(values);
  };

  const isCreateFormDisabled = () => {
    if (sectionDetails.formName.length > 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // setFormFields({ ...formFields, formName: sectionDetails.formName });
    let response;
    try {
      const addData = async () => {
        // response = await addSectionDetails(sectionDetails);
        console.log("section details in function", sectionDetails);
        // setResponse(response);
      };
      addData();

      const addfieldData = async () => {
        // response = await addSectionFormDetails(formFields);
        console.log("section form details in function", formFields);
        // setResponse(response);
      };
      addfieldData();
      addForm({
        name: sectionDetails.formName,
        formData: formFields,
      });
      setFormFields(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("formFields", formFields);
  }, [formFields]);

  return (
    <div className="p-2 bg-white h-screen">
      <div className="flex items-center justify-between w-full mb-1">
        <p className="text-lg">Configure New Form Fields</p>
        <div className="flex items-center justify-between gap-1">
          <label className="flex min-w-max w-8 p-2">
            <p>Form Name</p>
            <span className="text-red">*</span>
          </label>
          <input
            required
            type="text"
            name="formName"
            value={sectionDetails.formName}
            placeholder="Enter Section Name"
            className="input input-bordered w-full max-w-xs"
            onChange={handleSectionDetailsChange}
          />
        </div>
      </div>
      <div className="border border-grey bg-white">
        <div className="px-4 py-2">
          <div className="flex flex-row justify-between form-control w-full"></div>
          <p className="text-md font-semibold my-2">From Details</p>
          <div className="border border-grey px-4 py-2">
            <form>
              {formFields.map((field: any, index: any) => (
                <div key={index}>
                  <div className="flex justify-between" key={index}>
                    <div className="flex items-center">
                      <p>{`${index + 1}.)`}</p>
                    </div>
                    <div className="form-control m-2 w-full max-w-xs">
                      <label className="label block">
                        Name<span className="text-red">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        // value={formData.userName}
                        placeholder="Enter Field Name"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                    <div className="form-control m-2 w-full max-w-xs">
                      <label className="label block">
                        Field Type<span className="text-red">*</span>
                      </label>
                      <select
                        required
                        className="select select-bordered w-full max-w-xs"
                        name="type"
                        defaultValue="text"
                        onChange={(event: any) => handleChange(index, event)}
                      >
                        <option value="text">Text</option>
                        <option value="password">Password</option>
                        <option value="number">Number</option>
                        <option value="textarea">Textarea</option>
                        <option value="email">Email</option>
                        <option value="dropdown">Dropdown</option>
                        <option value="checkbox">CheckBox</option>
                        <option value="radio">Radio</option>
                        <option value="file">File</option>
                      </select>
                    </div>
                    <div className="form-control m-2  max-w-xs">
                      <label className="label block">
                        Field Required<span className="text-red">*</span>
                      </label>
                      <div className="flex">
                        <div className="m-4 flex mt-2">
                          <input
                            required
                            type="checkbox"
                            name="required"
                            className="checkbox"
                            checked={formFields[index].required}
                            onChange={(event) => handleChange(index, event)}
                          />
                          <label>&nbsp;Yes </label>
                        </div>
                      </div>
                    </div>
                    {formFields[index].type !== "text" && (
                      <div className="form-control m-2  max-w-xs">
                        <label className="label block">
                          Validation<span className="text-red">*</span>
                        </label>
                        <div className="flex">
                          <div className="m-4 flex mt-2">
                            <input
                              required
                              type="checkbox"
                              name="isValidationTrue"
                              className="checkbox"
                              checked={formFields[index].isValidationTrue}
                              onChange={(event) => handleChange(index, event)}
                            />
                            <label>&nbsp;Yes </label>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center">
                      {index != 0 && (
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="red"
                          strokeWidth="2"
                          fill="none"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                          type="button"
                          onClick={() => handleRemoveFields(index)}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                      )}
                    </div>
                  </div>
                  {formFields[index].type && (
                    <div>
                      <InputSwitch
                        index={index}
                        inputType={formFields[index].type}
                        formFields={formFields}
                        field={field}
                        setFormFields={setFormFields}
                      />
                    </div>
                  )}
                  {formFields[index].type !== "text" &&
                    formFields[index].isValidationTrue && (
                      <>
                        <div className="divider"></div>
                        <div>
                          <InputValidation
                            index={index}
                            inputType={formFields[index].type}
                            formFields={formFields}
                            field={field}
                            handleValidationChange={handleValidationChange}
                          />
                        </div>
                      </>
                    )}
                  <div className="divider"></div>
                </div>
              ))}
            </form>
            <div className="flex justify-end items-center">
              <button
                type="button"
                className="bg-blue py-2 px-4 rounded text-white"
                onClick={handleAddFields}
              >
                Add Field
              </button>
            </div>
          </div>
          <div className="flex justify-center p-2 m-2">
            <button
              type="button"
              className="bg-blue py-2 px-4 rounded text-white"
              onClick={handleSubmit}
              // disabled={isCreateFormDisabled()}
            >
              Create Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
