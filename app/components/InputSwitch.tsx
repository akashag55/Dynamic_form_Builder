"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const InputSwitch = (props: any) => {
  const addValue = (index: number) => {
    const updatedFields = [...props.formFields];
    updatedFields[index].values.push("");
    props.setFormFields(updatedFields);
  };

  const removeValue = (fieldIndex: number, valueIndex: number) => {
    const updatedFields = [...props.formFields];
    updatedFields[fieldIndex].values.splice(valueIndex, 1);
    props.setFormFields(updatedFields);
  };

  const handleChange = (
    fieldIndex: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedFields = [...props.formFields];
    updatedFields[fieldIndex][name] = value;
    props.setFormFields(updatedFields);
  };

  const handleValueChange = (
    fieldIndex: number,
    valueIndex: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const updatedFields = [...props.formFields];
    updatedFields[fieldIndex].values[valueIndex] = value;
    props.setFormFields(updatedFields);
  };

  if (props.inputType === "radio") {
    return (
      <div className="m-3">
        <p>Enter Radio button values</p>
        <div className="flex flex-wrap">
          {props.field.values.map((value: any, valueIndex: number) => (
            <div className="flex m-3" key={valueIndex}>
              <input
                // placeholder="Enter Field Name"
                className="input input-bordered w-full max-w-xs"
                type="text"
                value={value}
                placeholder={`Value ${valueIndex + 1}`}
                onChange={(event) =>
                  handleValueChange(props.index, valueIndex, event)
                }
              />
              <div className="flex items-center ml-2">
                {valueIndex >= 2 && (
                  <IoCloseOutline
                    className="btn btn-circle btn-xs"
                    onClick={() => removeValue(props.index, valueIndex)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="btn"
            onClick={() => addValue(props.index)}
          >
            Add value
          </button>
        </div>
      </div>
    );
  } else if (props.inputType === "dropdown") {
    return (
      <div>
        <label>Enter Dropdown values</label>
        <div className="flex flex-wrap">
          {props.field.values.map((value: any, valueIndex: number) => (
            <div className="flex m-3" key={valueIndex}>
              <input
                // placeholder="Enter Field Name"
                className="input input-bordered w-full max-w-xs"
                type="text"
                value={value}
                placeholder={`Value ${valueIndex + 1}`}
                onChange={(event) =>
                  handleValueChange(props.index, valueIndex, event)
                }
              />
              <div className="flex items-center ml-2">
                {valueIndex >= 2 && (
                  <IoCloseOutline
                    className="btn btn-circle btn-xs"
                    onClick={() => removeValue(props.index, valueIndex)}
                  />
                )}
              </div>
              {/* <button onClick={() => removeField(index)}>Remove</button> */}
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="btn"
            onClick={() => addValue(props.index)}
          >
            Add value
          </button>
        </div>
      </div>
    );
  } else if (props.inputType === "checkbox") {
    return (
      <div>
        <label>Enter Checkbox values</label>
        <div className="flex flex-wrap">
          {props.field.values.map((value: any, valueIndex: number) => (
            <div className="flex m-3" key={valueIndex}>
              <input
                // placeholder="Enter Field Name"
                className="input input-bordered w-full max-w-xs"
                type="text"
                value={value}
                placeholder={`Value ${valueIndex + 1}`}
                onChange={(event) =>
                  handleValueChange(props.index, valueIndex, event)
                }
              />
              <div className="flex items-center ml-2">
                {valueIndex >= 2 && (
                  <IoCloseOutline
                    className="btn btn-circle btn-xs"
                    onClick={() => removeValue(props.index, valueIndex)}
                  />
                )}
              </div>
              {/* <button onClick={() => removeField(index)}>Remove</button> */}
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="btn"
            onClick={() => addValue(props.index)}
          >
            Add value
          </button>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default InputSwitch;
