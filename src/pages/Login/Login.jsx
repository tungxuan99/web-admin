import React from "react";
import "./Login.scss";
import { InputField } from "./components/InputField";
import { WireFrame } from "../common/WireFrame";
import CommonConst from "../../constants/commonConst";
import { InputField2 } from "./components/InputField2";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";

export const Login = () => {
    const nagivate = useNavigate()
    return (
        <div className="login">
            <WireFrame />
            <div className="login__form">
                <div className="login__text-wrapper">Login</div>
                <div className="login__group-input">
                    <InputField title="Full name" placeholder="Adam" />
                    <InputField title="Email" placeholder="jane@xyz.com" />
                    <InputField2
                        title="Telephone"
                        placeholder="+1 (555) 000-00000"
                        listSelect={CommonConst.listCodePhone}
                    />
                </div>
                <div className="login__footer">
                    <button
                        className="login__footer__button-create"
                        onClick={() => nagivate('/')}
                    >
                        Login
                    </button>
                    <p className="login__footer__group">
                        <div className="login__footer__group-1">
                            <Checkbox />
                            <span className="login__footer__text-wrapper">Remember me</span>
                        </div>
                        <div className="login__footer__group-1">
                            <span className="login__footer__text-wrapper-2">Forgot password?</span>
                        </div>


                    </p>
                </div>
            </div>
        </div>
    );
};
