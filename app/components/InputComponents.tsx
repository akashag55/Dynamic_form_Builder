import React from "react";

export const CustomeInput = (props: any) => {

  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
      </label>
      <input
        type={props.fields.type}
        name={name}
        value={props.formData.name}
        placeholder="Enter Value"
        required={props.fields.required == "Yes" ? true : false}
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
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
      </label>
      <input
        type="text"
        name={name}
        value={props.formData.name}
        placeholder="Enter Value"
        required={props.fields.required == "Yes" ? true : false}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};

export const Emailinput = (props: any) => {
  console.log("email props", props)
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
      </label>
      <input
        type="email"
        name={name}
        value={props.formData.name}
        placeholder="Enter Value"
        required={props.fields.required == "Yes" ? true : false}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};
export const TextareaInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
      </label>
      <input
        type="textarea"
        name={name}
        value={props.formData.name}
        placeholder="Enter Value"
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};
export const DateInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        {props.fields.name}{" "}
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
      </label>
      <input
        type="date"
        name={name}
        value={props.formData.name}
        placeholder="Enter Value"
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
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
      </label>
      <input
        type="file"
        name={name}
        // value={props.fields.name}
        placeholder="Enter Value"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={props.onChangehandler}
      />
    </div>
  );
};
export const DropdownInput = (props: any) => {
  const name = props.fields.name.toLowerCase();
  const values = props.fields.field_values.split(",");
  return (
    <div className="form-control m-2 w-full max-w-xs">
      <label className="label block">
        {props.fields.name}
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
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
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
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
  const values = props.fields.field_values.split(",");
  return (
    <div className="form-control m-2 w-full max-w-xs">
      <label className="label block">
        {props.fields.name}
        {props.fields.required == "Yes" && <span className="text-red">*</span>}
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
                name="required"
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
