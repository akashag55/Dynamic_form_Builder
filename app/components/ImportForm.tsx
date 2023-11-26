import React, { useRef, useContext } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FormContext } from "../context";

const ImportForm = () => {
  const { addForm } = useContext(FormContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChosen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        try {
          const result = event.target?.result as string;
          const jsonData = JSON.parse(result);
          console.log("Parsed JSON data:", jsonData);
          addForm({
            name: jsonData.name,
            formData: jsonData.formData,
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <li className="">
      <div>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChosen}
        />
        <button onClick={handleFileUpload} className="btn flex">
          <IoCloudUploadOutline className="w-6 h-6" />
          <span>Import Form</span>
        </button>
      </div>
    </li>
  );
};

export default ImportForm;
