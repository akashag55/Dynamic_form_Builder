import React, { useState, useEffect } from "react";
import {
  CheckBoxInput,
  DropdownInput,
  Emailinput,
  FileInput,
  RadioInput,
  TextareaInput,
  Textinput,
} from "../components";
import { Column, useTable } from "react-table";
import { FaWindowClose } from "react-icons/fa";
// import NoData from "../../components/NoData";

const DynamicForm = (props: any) => {
  let [data, setData] = useState<any>([]);
  const [formField, setFormField] = useState<any>([]);
  const [formData, setFormData] = useState<any>({});
  // const [finalData, setFinalData] = useState({});

  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchedData = await sectionformdetails(props.sectionName);
  //     setFormField(fetchedData);
  //     console.log("Data from APi of table colums", fetchedData);
  //   };
  //   getData();
  // }, [props.sectionName]);

  var sectionName = props.sectionName;
  var name = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  var field_name: any = [];
  for (let name of formField) {
    field_name.push(name.field_name);
  }
  // console.log(field_name);
  // for (let field of field_name) {
  //   setFormData({ ...formData, [field]: "" });
  // }
  // console.log("State", formData);
  const columns = React.useMemo(
    () =>
      formField.map((el: any) => {
        console.log("column elements", el.field_name);
        return {
          Header: el.field_name,
          accessor: el.field_name.toLowerCase(),
        };
      }),
    [data, formField]
  );

  const onChangehandler = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("target value", e.target.name, e.target.value);
  };
  const onFileChangehandler = (e: any) => {
    const { name } = e.target;

    if (e.target.files) {
      const selectedFile = e.target.files[0];
      console.log("Selected file:", selectedFile);
      setFormData({ ...formData, [name]: selectedFile });
    }
  };

  const handleSubmit = () => {
    console.log("submit values", formData);
    // setData({ ...formData });
    data.push(formData);
    setFormData("");
    let response;
    const addData = async () => {
      // response = await createNewTable(data);
      // console.log("create new table response", response);
    };
    addData();
    console.log("state in handle submit in function", data);
  };

  return (
    <div className="p-3 bg-bggrey h-screen">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl pb-5">{name}</p>
        <FaWindowClose onClick={props.closeForm} />
      </div>
      <div className="border border-grey bg-white">
        {/* <div className="flex justify-end">
          <label
            className="uppercase px-4 py-2 mx-3 my-3 bg-blue rounded text-white font-semibold hover:cursor-pointer"
            htmlFor="my-modal-4"
          >
            Add {name}
          </label>
        </div> */}

        {/* --------------------Add user Modal Start----------------------*/}
        {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal"> */}
        {/* <div className="modal-box w-7/12 max-w-5xl">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">Add New {name}</h3>
              <label htmlFor="my-modal-4" className="hover:cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  stroke="black"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </label>
            </div> */}
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
    </div>
    // {/* --------------------Add user Modal End----------------------*/}

    // </div>
    // </div>
  );
};

export default DynamicForm;
