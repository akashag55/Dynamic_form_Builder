"use client";
import React, { useEffect, useState } from "react";

const InputValidation = ({
  inputType,
  index,
  handleValidationChange,
  field,
  formFields,
  setFormFields,
}: any) => {
  const [validation, setValidation] = useState<any>({});
  const handleChange = (e: any) => {
    console.log(e.target);
    setValidation({ ...validation, [e.target.name]: e.target.value });
  };

  const handleChangeForDropdownType = (e: any) => {
    const { name, value } = e.target;
    const updatedFormFields = [...formFields];
    updatedFormFields[index]["validation"] = {
      ...validation,
      [inputType]: {
        [name]: value,
      },
    };
    console.log("updatedFormFields - ", updatedFormFields);
    setFormFields(updatedFormFields);
    setValidation({
      ...validation,
      [inputType]: {
        [name]: value,
      },
    });
  };

  useEffect(() => {
    console.log(validation, inputType, index, field, formFields);
    if (Object.keys(validation).length !== 0 || inputType !== "dropdown") {
      handleValidationChange(index, validation);
    }
  }, [validation]);

  const getValidationForInputType = () => {
    switch (inputType) {
      // Validating password with strength of Passwords
      case "password":
        return (
          <div className="flex items-center justify-start gap-1">
            <label className="flex min-w-max w-8 p-2">
              <p>Password Strength :</p>
              <span className="text-red">*</span>
            </label>
            <input
              type="radio"
              name="strength"
              placeholder="Enter error text"
              className=""
              value="weakPassword"
              onChange={handleChange}
            />
            <label className="ml-1">weak</label>
            <input
              type="radio"
              name="strength"
              placeholder="Enter error text"
              className=""
              value="mildPassword"
              onChange={handleChange}
            />
            <label className="ml-1">mild</label>
            <input
              type="radio"
              name="strength"
              placeholder="Enter error text"
              className=""
              value="strongPassword"
              onChange={handleChange}
            />
            <label className="ml-1">strong</label>
          </div>
        );

      // Validating Number with Min Max value constraints
      case "number":
        return (
          <div className="flex items-center justify-start gap-1">
            <label className="ml-1">Min</label>
            <input
              type="number"
              name="minValue"
              placeholder="Enter value"
              className="input input-bordered w-full max-w-md flex-grow"
              // value=''
              onChange={handleChange}
            />
            <label className="ml-1">Max</label>
            <input
              type="number"
              name="maxValue"
              placeholder="Enter value"
              className="input input-bordered w-full max-w-md flex-grow"
              // value='maxValue'
              onChange={handleChange}
            />
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div className="m-1">
      <p>Enter field validations</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-start gap-1">
          <label className="flex min-w-max w-8 px-2">
            <p>Note</p>
            <span>{`(optional)`}</span>
          </label>
          <input
            type="text"
            name="note"
            value={validation?.note || ""}
            placeholder="Enter a note for the input field here"
            className="input input-bordered w-full max-w-md flex-grow"
            onChange={handleChange}
          />
        </div>
        {getValidationForInputType()}
        <h3>
          Enter an error text to be displayed, you can leave it blank to show
          the default error msg specific to field type.
        </h3>
        <div className="flex items-center justify-start gap-1">
          <label className="flex min-w-max w-8 px-2">
            <p>Error Text</p>
            <span>{`(optional)`}</span>
          </label>
          <input
            type="text"
            name="errorText"
            value={validation?.errorText || ""}
            placeholder="Enter error text"
            className="input input-bordered w-full max-w-md flex-grow"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default InputValidation;
