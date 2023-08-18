import React from "react";
import "./InputField.scss";

export const InputField = ({ title, placeholder = "" }) => {
  return (
    <div className="input-field">
      <div className="input-field__label">{title}</div>
      <input
        className="input-field__input"
        placeholder={placeholder}
        />
    </div>
  );
};
