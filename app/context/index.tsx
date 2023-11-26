"use client";
import React, { createContext, useState, useEffect } from "react";

// Create a context
const FormContext = createContext<any>([]);

// Create a context provider
const FormContextProvider = ({ children }: any) => {
  let localForm: any;

  if (typeof window !== "undefined") {
    localForm = localStorage.getItem("forms");
  } else {
    localForm = null;
  }

  // const localSubmissions: any = localStorage?.getItem("submissions");

  if (localForm) {
    console.log("localForm  - - ", localForm);
  }

  // Define the state or values you want to share
  const [forms, setForms] = useState<any>(JSON.parse(localForm) || []);
  const [submissions, setSubmissions] = useState<any>([]);

  useEffect(() => {
    console.log("localForm  - - ", localForm);
    console.log("forms in useeffect - ", forms);
    localStorage.setItem("forms", JSON.stringify(forms));
    localStorage.setItem("submissions", submissions);
  }, [forms, submissions]);

  const addForm = (formData: any) => {
    setForms((prev: any) => [...prev, formData]);
  };

  const deleteForm = (index: any) => {
    const newForms = [...forms];
    newForms.splice(index, 1);
    setForms(newForms);
  };

  const addSubmission = (submission: any) => {
    setSubmissions((prev: any) => [...prev, submission]);
  };

  const deleteSubmission = (index: any) => {
    const newSubmissions = [...submissions];
    newSubmissions.splice(index, 1);
    setSubmissions(newSubmissions);
  };

  const exportFormJson = (index: any) => {
    const form = forms[index];
    const jsonData = JSON.stringify(form, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${form.name}-Config.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <FormContext.Provider
      value={{
        forms,
        submissions,
        addForm,
        deleteForm,
        addSubmission,
        deleteSubmission,
        exportFormJson,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
