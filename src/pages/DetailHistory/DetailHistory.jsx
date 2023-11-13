import React, { useEffect, useState } from "react";
import "./DetailHistory.scss";
import { ReactComponent as IconFind } from "../../shared/assets/icon/find.svg";
import Image1 from "../../shared/assets/images/image1.png";
import { TableGroup } from "./components/TableGroup";
import { Pie } from "@ant-design/plots";
import { historySerivice } from "../../serivces/historySerivice";

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
const listNextStep = {
  "Transfer credential authorization degree": "Refer CAS",
  "Upskills/ Added credits": "Refer courses"
};

export const DetailHistory = () => {

  const [detail, setDetail] = useState({
    percent: 10
  })

  useEffect(() => {
    historySerivice.getDetail().then(result => {
      setDetail(result.data)
    }).catch(() => {
    })
  }, [])
  const config = {
    appendPadding: 10,
    data: [
      {
        value: detail?.percent || 0
      },
      {
        value: 100 - (detail?.percent || 0)
      }
    ],
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
        content: (detail?.percent || 0) + '%',
      },
    },
  };

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
              Name: {detail?.name}
            </div>
            <div className="detail-history__content__text">
              Date of birth: {detail?.birthday}
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
          <TableGroup title="CREDENTIAL ANALYSIS"
            tableData={detail?.data}
            type={1}
            />
          <TableGroup
            title="NEXT STEP REQUIREMENTS"
            tableData={listNextStep}
            type={2}
          />
        </div>
      </div>
    </div>
  );
};
