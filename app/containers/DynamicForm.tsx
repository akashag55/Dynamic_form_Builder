import React, { useState, useEffect, useContext } from "react";
import {
  CheckBoxInput,
  DropdownInput,
  Emailinput,
  FileInput,
  RadioInput,
  TextareaInput,
  Textinput,
} from "../components";
import { FaWindowClose } from "react-icons/fa";
import { FormContext } from "../context";
const DynamicForm = (props: any) => {
  let [data, setData] = useState<any>([]);
  const [formField, setFormField] = useState<any>([]);
  const [formData, setFormData] = useState<any>({});

  const { addSubmission } = useContext(FormContext);

  var sectionName = props.sectionName;
  var name = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  var field_name: any = [];
  for (let name of formField) {
    field_name.push(name.field_name);
  }

  const onChangehandler = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log("target value", e.target.name, e.target.value);
  };
  const onFileChangehandler = (e: any) => {
    const { name } = e.target;

    if (e.target.files) {
      const selectedFile = e.target.files[0];
      // console.log("Selected file:", selectedFile);
      setFormData({ ...formData, [name]: selectedFile });
    }
  };

  const handleSubmit = () => {
    console.log("submit values", formData);
    // setData({ ...formData });
    data.push(formData);
    addSubmission(formData);
    setFormData("");

    console.log("state in handle submit in function", data);
  };

  return (
    <div className="p-3 bg-bggrey h-screen">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl pb-5">{name}</p>
        <FaWindowClose onClick={props.closeForm} />
      </div>
      <div className="border border-grey bg-white">
        <div className="border border-grey p-4 m-3 rounded-md">
          <form>
            <div className="flex flex-wrap justify-between">
              {props.selectedForm.formData.map((item: any, index: number) => {
                // console.log(item);
                return (
                  <div key={index}>
                    {item.type == "text" && (
                      <Textinput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onChangehandler}
                      />
                    )}
                    {item.type == "email" && (
                      <Emailinput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onChangehandler}
                      />
                    )}
                    {item.type == "textarea" && (
                      <TextareaInput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onChangehandler}
                      />
                    )}
                    {item.type == "file" && (
                      <FileInput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onFileChangehandler}
                      />
                    )}
                    {item.type == "dropdown" && (
                      <DropdownInput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onChangehandler}
                      />
                    )}
                    {item.type == "radio" && (
                      <RadioInput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onChangehandler}
                      />
                    )}
                    {item.type == "checkbox" && (
                      <CheckBoxInput
                        fields={item}
                        formData={formData}
                        setformData={setFormData}
                        onChangehandler={onChangehandler}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </form>
        </div>
        <div className="flex justify-end m-4">
          <label
            className="btn btn-primary"
            htmlFor="my-modal-4"
            onClick={handleSubmit}
          >
            Submit
          </label>
        </div>
      </div>
      <div>
        {formData &&
          formData.map((item: any, index: any) => {
            return <p>iem</p>;
          })}
      </div>
    </div>
    // {/* --------------------Add user Modal End----------------------*/}

    // </div>
    // </div>
  );
};

export default DynamicForm;
