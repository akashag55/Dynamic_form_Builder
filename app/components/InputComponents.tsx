import React, { useState } from "react";
import { validateNumber, validateString } from "../utils";

export const CustomeInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type={props.fields.type}
        name={name}
        value={props.formData.name}
        placeholder={`Enter ${props.fields.name}`}
        required={props.fields.required}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};

export const Textinput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="text"
        name={name}
        value={props.formData.name}
        placeholder={`Enter ${props.fields.name}`}
        required={props.fields.required}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};
export const NumberInput = (props: any) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { fields, onChangehandler, formData } = props;
  const { name, type, required, isValidationTrue, validation, values } = fields;
  const { minValue, maxValue } = validation;
  const handleChange = (e: any) => {
    if (isValidationTrue) {
      const valid: any = validateNumber(
        "number",
        e.target.value,
        minValue,
        maxValue
      );
      console.log("valid - ", valid);
      if (valid["error"]) {
        setErrorText(valid.error.message);
        setIsInvalid(true);
      } else {
        setErrorText("");
        setIsInvalid(false);
      }
    }
    onChangehandler(e);
  };
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="number"
        name={name.toLowerCase()}
        value={formData.name}
        placeholder={`Enter ${name}`}
        required={required}
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      {isInvalid && (
        <label className="text-xs text-red p-1">
          {(validation?.errorText?.length > 0 && validation?.errorText) ||
            errorText}
        </label>
      )}
    </div>
  );
};

export const Emailinput = (props: any) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { fields, onChangehandler } = props;
  const { name, type, required, isValidationTrue, validation, values } = fields;
  // const name = props.fields.name.toLowerCase();
  const handleChange = (e: any) => {
    if (isValidationTrue) {
      const valid: any = validateString("email", e.target.value);
      console.log("valid - ", valid);
      if (valid["error"]) {
        setErrorText(valid.error.message);
        setIsInvalid(true);
      } else {
        setErrorText("");
        setIsInvalid(false);
      }
    }
    props.onChangehandler(e);
  };
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="email"
        name={name}
        value={props.formData.name}
        placeholder={`Enter ${props.fields.name}`}
        required={props.fields.required}
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      {isInvalid && (
        <label className="text-xs text-red p-1">
          {(props.fields.validation?.errorText?.length > 0 &&
            props.fields.validation?.errorText) ||
            errorText}
        </label>
      )}
    </div>
  );
};
export const PasswordInput = (props: any) => {
  const passwordErrorTextMap: any = {
    weakPassword: "Minimum 3 characters required",
    mildPassword: "Minimum 6 alphanumeric characters required",
    strongPassword:
      "Minimum eight characters, at least one letter, one number and one special character required",
  };
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorText, setErrorText] = useState(
    passwordErrorTextMap[props.fields.validation?.strength]
  );
  const name = props.fields.name.toLowerCase();
  const handleChange = (e: any) => {
    // validate(schemaName, value)
    const valid: any = validateString(
      props.fields.validation.strength,
      e.target.value
    );
    console.log("valid - ", valid);
    if (valid["error"]) {
      setErrorText(valid.error.message);
      setIsInvalid(true);
    } else {
      setErrorText("");
      setIsInvalid(false);
    }
    props.onChangehandler(e);
  };
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="password"
        name={name}
        value={props.formData.name}
        placeholder={`Enter ${props.fields.name}`}
        required={props.fields.required}
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      {isInvalid && (
        <label className="text-xs text-red p-1">
          {(props.fields.validation?.errorText?.length > 0 &&
            props.fields.validation?.errorText) ||
            errorText}
        </label>
      )}
    </div>
  );
};

export const TextareaInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="textarea"
        name={name}
        value={props.formData.name}
        placeholder={`Enter ${props.fields.name}`}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};

export const DateInput = (props: any) => {
  // const [isInvalid, setIsInvalid] = useState(false);
  // const [errorText, setErrorText] = useState("");
  const name = props.fields.name.toLowerCase();
  // const handleChange = (e: any) => {
  //   // validate(schemaName, value)
  //   const valid = validateDate("date", e.target.value, );
  //   console.log("valid - ", valid);
  //   if (valid["error"]) {
  //     setErrorText(valid.error.message);
  //     setIsInvalid(true);
  //   } else {
  //     setErrorText('');
  //     setIsInvalid(false);
  //   }
  //   props.onChangehandler(e);
  // };
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="date"
        name={name}
        value={props.formData.name}
        placeholder={`Enter ${props.fields.name}`}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};

export const FileInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <input
        type="file"
        name={name}
        // value={props.fields.name}
        placeholder={`Enter ${props.fields.name}`}
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};

export const DropdownInput = (props: any) => {
  console.log("dropdown", props);
  const name = props.fields.name.toLowerCase();
  const values = props.fields.values;
  return (
    <div className="form-control m-2 w-full max-w-xs">
      <label className="label block">
        {props.fields.name}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        name={name}
        onChange={props.onChangehandler}
      >
        {values.map((item: any, index: any) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const RadioInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control m-2  max-w-xs">
      <label className="label block">
        {props.fields.name}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      <div className="flex">
        <div className="m-4 flex mt-2">
          <input
            type="radio"
            name={name}
            value="Yes"
            className="radio"
            // checked={formFields[index].status}
            onChange={props.onChangehandler}
          />
          <label>&nbsp;Yes </label>
        </div>
        <div className="flex mt-2">
          <input
            type="radio"
            name={name}
            value="No"
            className="radio"
            // checked={formFields[index].status}
            onChange={(event: any) => props.onChangehandler(event)}
          />
          <label>&nbsp;No</label>
        </div>
      </div>
    </div>
  );
};

export const CheckBoxInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  const values = props.fields.values;
  return (
    <div className="form-control m-2 w-full max-w-xs">
      <label className="label block">
        {props.fields.name}
        {props.fields.required && <span className="text-red">*</span>}
      </label>
      {/* <select
        className="select select-bordered w-full max-w-xs"
        name={name}
        onChange={props.onChangehandler}
      > */}
      <div className="m-4 flex mt-2">
        {values.map((item: any, index: any) => {
          return (
            <>
              <input
                key={index}
                type="checkbox"
                name={name}
                value={item}
                className="checkbox"
                // checked={formFields[index].status}
                onChange={props.onChangehandler}
              />
              <label>&nbsp;{item} </label>
            </>
          );
        })}
      </div>
    </div>
  );
};
