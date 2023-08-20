import React from "react";
import "./InputField.scss";
import { Input } from 'antd';

export const InputField = ({ title, placeholder = "" }) => {
  return (
    <div className="input-field">
      <div className="input-field__label">{title}</div>
      <Input
        className="input-field__input"
        size="large"
        placeholder={placeholder} />
    </div>
  );
};
