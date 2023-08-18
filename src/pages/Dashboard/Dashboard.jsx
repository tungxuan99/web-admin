import React from "react";
import { Link } from "react-router-dom";
import { Component } from "../../components/Component";
import { PropertyComponentWrapper } from "../../components/PropertyComponentWrapper";
import "./Dashboard.scss";
import IconArrowBottom from "../../shared/assets/icon/arrow-bottom.svg";
import IconArrowLeft from "../../shared/assets/icon/arrow-left.svg";
import IconArrowRight from "../../shared/assets/icon/arrow-right.svg";
import IconEdit2 from "../../shared/assets/icon/edit-2.svg";
import IconEdit from "../../shared/assets/icon/edit.svg";
import IconFind from "../../shared/assets/icon/find.svg";
import IconList from "../../shared/assets/icon/list.svg";
import IconLougout from "../../shared/assets/icon/logout.svg";
import IconStar from "../../shared/assets/icon/star.svg";
import IconTrash from "../../shared/assets/icon/trash.svg";
import IconUser from "../../shared/assets/icon/user.svg";

export const Dashboard = () => {
  return (
    <div className="DASHBOARD">
      {/* <div className="div-2">
        <div className="overlap-2">
          <div className="text-wrapper-6">Personal info</div>
          <div className="text-wrapper-7">ADAM</div>
          <div className="text-wrapper-8">LOG OUT</div>
          <div className="text-wrapper-9">Create requirement</div>
          <div className="text-wrapper-10">History</div>
          <div className="text-wrapper-11">Referrals</div>
          <div className="text-wrapper-12">Online learning courses</div>
          <IconUser className="icon" />
          <IconUser className="icon" />
          <img
            className="ellipse"
            alt="Ellipse"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/ellipse-12.svg"
          />
          <img
            className="icon-2"
            alt="Icon"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/icon-2.svg"
          />
          <img
            className="icon-3"
            alt="Icon"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/icon-1.svg"
          />
          <img
            className="icon-4"
            alt="Icon"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/icon.svg"
          />
          <img
            className="group-7"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/group-5@2x.png"
          />
          <img
            className="group-8"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/group-7@2x.png"
          />
        </div>
        <img
          className="image"
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/image-1@2x.png"
        />
        <div className="group-wrapper">
          <img
            className="group-9"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/group-6@2x.png"
          />
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-13">Type of application:</div>
          <Component
            className="component-3"
            property1="component-1"
            vector="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/vector-7.svg"
          />
        </div>
        <div className="overlap-4">
          <p className="p">Please select type of documents upload:</p>
          <PropertyComponentWrapper
            className="component-6"
            property1="component-4"
            vector="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/vector-6.svg"
          />
        </div>
        <div className="text-wrapper-14">Resume</div>
        <div className="text-wrapper-15">Bachelor</div>
        <div className="text-wrapper-16">Resume 2</div>
        <div className="text-wrapper-17">Edit</div>
        <div className="text-wrapper-18">Delete</div>
        <div className="text-wrapper-19">Type</div>
        <div className="button">
          <div className="text">Verify</div>
        </div>
        <Link className="div-wrapper" to="/dashboard">
          <div className="text">Add credential</div>
        </Link>
        <div className="overlap-5">
          <div className="rectangle-4" />
          <div className="group-10">
            <div className="overlap-group-3">
              <div className="month">Month 2000</div>
              <img
                className="vector-4"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/vector-1-1.svg"
              />
            </div>
            <div className="text-wrapper-20">Mon</div>
            <div className="text-wrapper-21">Wed</div>
            <div className="text-wrapper-22">Tue</div>
            <div className="text-wrapper-23">Thu</div>
            <div className="text-wrapper-24">Fri</div>
            <div className="text-wrapper-25">Sat</div>
            <div className="text-wrapper-26">Sun</div>
            <div className="text-wrapper-27">28</div>
            <div className="text-wrapper-28">29</div>
            <div className="text-wrapper-29">30</div>
            <div className="text-wrapper-30">31</div>
            <div className="text-wrapper-31">1</div>
            <div className="text-wrapper-32">2</div>
            <div className="text-wrapper-33">3</div>
            <div className="text-wrapper-34">4</div>
            <div className="text-wrapper-35">5</div>
            <div className="text-wrapper-36">6</div>
            <div className="text-wrapper-37">7</div>
            <div className="text-wrapper-38">8</div>
            <div className="text-wrapper-39">9</div>
            <div className="text-wrapper-40">10</div>
            <div className="text-wrapper-41">11</div>
            <div className="text-wrapper-42">12</div>
            <div className="text-wrapper-43">13</div>
            <div className="text-wrapper-44">14</div>
            <div className="text-wrapper-45">15</div>
            <div className="text-wrapper-46">16</div>
            <div className="text-wrapper-47">17</div>
            <div className="text-wrapper-48">18</div>
            <div className="text-wrapper-49">19</div>
            <div className="text-wrapper-50">20</div>
            <div className="text-wrapper-51">21</div>
            <div className="text-wrapper-52">22</div>
            <div className="text-wrapper-53">23</div>
            <div className="text-wrapper-54">24</div>
            <div className="text-wrapper-55">25</div>
            <div className="text-wrapper-56">26</div>
            <div className="text-wrapper-57">27</div>
            <div className="text-wrapper-58">28</div>
            <div className="text-wrapper-59">29</div>
            <div className="text-wrapper-60">30</div>
            <div className="text-wrapper-61">31</div>
            <div className="text-wrapper-62">1</div>
            <div className="text-wrapper-63">2</div>
            <div className="text-wrapper-64">3</div>
            <div className="text-wrapper-65">4</div>
            <div className="text-wrapper-66">5</div>
            <div className="text-wrapper-67">6</div>
            <div className="text-wrapper-68">7</div>
            <img
              className="vector-6"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/vector-3.svg"
            />
          </div>
        </div>
        <img
          className="vector-7"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/vector-4.svg"
        />
        <img
          className="vector-8"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/5d5c132fbaea29d9589cee129c45c13e/img/vector-5.svg"
        />
      </div> */}
    </div>
  );
};
