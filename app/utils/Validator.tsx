import React from "react";
import Joi from "joi";

const schemaMap: any = {
  email: Joi.string().email({ tlds: { allow: false } }),
  weakPassword: Joi.string().min(3),
  mildPassword: Joi.string().min(6).alphanum(),
  strongPassword: Joi.string().min(8).alphanum(),
  number: (min: number, max: number) => Joi.number().min(min).max(max),
};

export const validateString = (schema: any, Input: any) =>
  schemaMap[schema].validate(Input);

export const validateNumber = (schema: any, Input: any, min: any, max: any) => {
  // console.log(schemaMap[schema], Input, min, max);
  return schemaMap[schema](parseInt(min), parseInt(max)).validate(Input);
};
