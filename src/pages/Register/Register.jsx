import React from "react";
import "./Register.scss";
import { ReactComponent as IconCheckCirle } from "../../shared/assets/icon/check-cirle.svg";
import { InputField } from "./components/InputField";
import { WireFrame } from "../common/WireFrame";

export const Register = () => {
  return (
    <div className="register">
      <WireFrame />
      <div className="register__form">
        <div className="register__text-wrapper">Register</div>
        <div className="register__group-input">
          <InputField title="Full name" placeholder="Adam" />
          <InputField title="DoB" placeholder="2000-11-11" />
          <InputField title="Email" placeholder="jane@xyz.com" />
          <InputField title="Gender" placeholder="Male" />
          <InputField title="Telephone" placeholder="+1 (555) 000-00000" />
        </div>
        <div className="register__rules">
          <input type="checkbox" className="register__rules__input-checkbox" />
          <label className="register__rules__i-agree">
            <span className="register__rules__text-wrapper">
              I agree to the
            </span>
            <span className="register__rules__span">&nbsp;</span>
            <span className="register__rules__text-wrapper-2">terms</span>
            <span className="register__rules__text-wrapper"> &amp; </span>
            <span className="register__rules__text-wrapper-2">
              privacy policy
            </span>
          </label>
        </div>
        <div className="register__footer">
          <button className="register__footer__button-create">
            Create an account
          </button>
          <p>
            <span className="register__footer__text-wrapper">Already have account?</span>
            <span className="register__rules__text-wrapper">&nbsp;</span>
            <span className="register__footer__text-wrapper-2">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};
