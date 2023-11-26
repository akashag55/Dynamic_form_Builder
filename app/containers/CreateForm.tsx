import React, { useState, useEffect, useContext } from "react";
import { InputSwitch, InputValidation } from "../components";
import { IoCloseOutline } from "react-icons/io5";
import { FormContext } from "../context";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

const CreateForm = () => {
  const initialState = [
    {
      id: uuidv4(),
      name: "",
      type: "text",
      values: ["", ""],
      required: true,
      isValidationTrue: true,
      validation: {},
      isDependant: false,
      dependants: {},
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
        id: uuidv4(),
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

    try {
      addForm({
        name: sectionDetails.formName,
        formData: formFields,
      });
      setFormFields(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  const isSubmitDiabled = () => {
    let arrayOfChecks = [];
    if (sectionDetails.formName.length === 0) {
      arrayOfChecks.push(false);
    }
    formFields.map((field: any) => {
      if (field.name.length === 0) {
        arrayOfChecks.push(false);
      }
      if (field.isValidationTrue) {
      }
    });
    if (arrayOfChecks.includes(false)) {
      return true;
    } else return false;
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
                        value={field.type}
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
                        <IoCloseOutline
                          className="btn btn-circle btn-xs"
                          onClick={() => handleRemoveFields(index)}
                        />
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
                  {/* Input Validation is rendering Validation parameters for different input types when we add fields */}
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
                            setFormFields={setFormFields}
                          />
                        </div>
                      </>
                    )}
                  <div className="divider"></div>
                </div>
              ))}
            </form>
            {/* Button to add add new field */}
            <div className="flex justify-end items-center">
              <button type="button" className="btn" onClick={handleAddFields}>
                Add Field
              </button>
            </div>
          </div>
          <div className="flex justify-center p-2 m-2">
            <button
              type="button"
              className={clsx("btn", isSubmitDiabled() && "btn-disabled")}
              onClick={handleSubmit}
              aria-disabled={isSubmitDiabled()}
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
