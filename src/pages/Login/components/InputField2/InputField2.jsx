import React from "react";
import "./InputField2.scss";
import { Input } from 'antd';

export const InputField2 = ({ title, placeholder = "", listSelect }) => {
  return (
    <div className="input-field-2">
      <div className="input-field-2__label">{title}</div>
      <Input
        className="input-field-2__input"
        size="large"
        addonBefore={listSelect}
        placeholder={placeholder} />
    </div>
  );
};
