import React from "react";
import "./DetailHistory.scss";
import { ReactComponent as IconFind } from "../../shared/assets/icon/find.svg";
import Image1 from "../../shared/assets/images/image1.png";
import { TableGroup } from "./components/TableGroup";
import { Pie } from "@ant-design/plots";

const listCredential = [
  {
    label: "Resume",
    value: "Verified",
  },
  {
    label: "Educational Degree",
    value: "Unverified",
  },
];
const listNextStep = [
  {
    label: "Transfer credential authorization degree",
    value: "Refer CAS",
  },
  {
    label: "Upskills/ Added credits",
    value: "Refer courses",
  },
];

const data = [
  {
    value: 85,
  },
  {
    value: 15,
  },
];
const config = {
  appendPadding: 10,
  data,
  angleField: "value",
  colorField: "type",
  radius: 1,
  color: "#a8ddb5",
  showContent: false,
  innerRadius: 0.6,
  interactions: [{ type: "tooltip", enable: false }],
  legend: false,
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      content: "85%",
    },
  },
};

export const DetailHistory = () => {
  return (
    <div className="detail-history">
      <div className="detail-history__group-search">
        <IconFind />
        <input type="text" className="detail-history__group-search__input" />
      </div>
      <div className="detail-history__group-info">
        <img
          className="detail-history__group-info__image"
          src={Image1}
          alt="image1"
        />
        <div className="detail-history__group-info__title">
          Credential Assessment Report
        </div>
        <span className="detail-history__group-info__text">
          Date: 22 Mar 2023
        </span>
        <span className="detail-history__group-info__text">Ref #:</span>
      </div>

      <div className="detail-history__content">
        <div className="detail-history__content__left">
          <div className="detail-history__content__user-info">
            <div className="detail-history__content__text">
              Name: NGUYEN, Van A
            </div>
            <div className="detail-history__content__text">
              Date of birth: May 15, 1999
            </div>
          </div>
          <div className="detail-history__content__group-chart">
            <div className="detail-history__content__group-chart__title">
              CANADA EQUIVALENCY SUMMARY
            </div>
            <div className="detail-history__content__text">Matching rate:</div>
            <div className="detail-history__content__text">
              <Pie {...config} />
            </div>
            <div className="detail-history__content__text">
            </div>
          </div>
        </div>
        <div className="detail-history__content__right">
          <TableGroup title="CREDENTIAL ANALYSIS" tableData={listCredential} />
          <TableGroup title="NEXT STEP REQUIREMENTS" tableData={listNextStep} />
        </div>
      </div>
    </div>
  );
};
