"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.png";
import { CreateFrom, DynamicForm, Submissions } from "./containers";
import { FormContext } from "./context";
import { Sidebar } from "./components";

const Home = () => {
  const { forms, addForm, exportFormJson, deleteForm } =
    useContext(FormContext);
  interface section {
    section_id: number;
    section_name: string;
    status: string;
  }
  const [selectedMenu, setSelectedMenu] = useState("user");
  const [selectedForm, setSelectedForm] = useState({});
  const [data, setData] = useState<section[]>([]);

  const handleMenuClick = (menu: any) => {
    console.log(menu);
    setSelectedMenu(menu);
  };

  const openForm = (form: any) => {
    setSelectedForm(form);
    setSelectedMenu("dynamicForm");
  };

  const closeForm = () => {
    setSelectedMenu("addSection");
    setSelectedForm({});
  };

  const getContainer = () => {
    switch (selectedMenu) {
      case "dynamicForm":
        return (
          <DynamicForm
            sectionName={selectedMenu}
            selectedForm={selectedForm}
            closeForm={closeForm}
          />
        );
        break;
      case "submissions":
        return <Submissions />;
      default:
        return <CreateFrom />;
        break;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        forms={forms}
        exportFormJson={exportFormJson}
        deleteForm={deleteForm}
        openForm={openForm}
        handleMenuClick={handleMenuClick}
      />

      <div className="h-[790px] w-4/5 overflow-x-hidden overflow-y-scroll">
        <nav className="bg-white p-4 border-b-2 border-grey fixed w-full">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="text-xl font-bold">
                Dynamic Form Builder
              </a>
            </div>
          </div>
        </nav>
        <div className="h-[70px] w-full"></div>
        {getContainer()}
      </div>
    </div>
  );
};

export default Home;
