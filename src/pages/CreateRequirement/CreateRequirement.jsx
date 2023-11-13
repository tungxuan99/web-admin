import React, { useState } from "react";
import "./CreateRequirement.scss";

import { Sidebar } from "../common/Sidebar";
import { ReactComponent as IconFind } from "../../shared/assets/icon/find.svg";
import { ReactComponent as IconEdit } from "../../shared/assets/icon/edit-2.svg";
import { ReactComponent as IconTrash } from "../../shared/assets/icon/trash.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TableRequirement } from "./components/Table";
import { Alert } from "../common/Alert";
import { Button, Modal, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { requirementService } from "../../serivces/requirementService";
const { Dragger } = Upload;

const listTypeOfApp = [
  {
    title: "Study",
    value: "Study",
  },
  {
    title: "Express Entry",
    value: "Express Entry",
  },
  {
    title: "Other",
    value: "Other",
  },
];

const listTypeDocument = [
  {
    title: "Resume",
    value: "Resume",
  },
  {
    title: "Bachelor",
    value: "Bachelor",
  },
  {
    title: "Master’s",
    value: "Master’s",
  },
  {
    title: "degree",
    value: "degree",
  },
  {
    title: "Certifications",
    value: "Certifications",
  },
  {
    title: "Other",
    value: "Other",
  },
];

const tableData = [
  {
    type: "Resume",
    edit: <IconEdit />,
    delete: <IconTrash />,
  },
  {
    type: "Bachelor",
    edit: <IconEdit />,
    delete: <IconTrash />,
  },
  {
    type: "Resume 2",
    edit: <IconEdit />,
    delete: <IconTrash />,
  },
];

export const CreateRequirement = () => {
  const [typeOfApp, setTypeOfApp] = React.useState("");
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [listUpload, setListUpload] = useState([])

  const handleChange = (event) => {
    setTypeOfApp(event.target.value);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setListUpload([])
  };

  const onChangeUpload = (info) => {
    console.log("info", info);
    setListUpload(info.fileList)
  };

  const handleUpdateFile = () => {
    requirementService.upload(listUpload)
    handleCloseModal()
  }

  return (
    <div className="create-requirement">
      <div className="create-requirement__content">
        <div className="create-requirement__content__header">
          <div className="create-requirement__content__header__left">
            <div className="create-requirement__content__header__group-search">
              <IconFind />
              <input
                type="text"
                className="create-requirement__content__header__group-search__input"
              />
            </div>
            <div className="create-requirement__content__header__type-app">
              <label className="create-requirement__content__header__type-app__label">
                Type of application:
              </label>
              <Select
                className="create-requirement__content__header__type-app__select"
                value={typeOfApp}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                placeholder="select"
              >
                <MenuItem disabled value="">
                  <em>Select</em>
                </MenuItem>
                {listTypeOfApp?.map((item, index) => (
                  <MenuItem value={item.value} key={index}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="create-requirement__content__header__right">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
            </LocalizationProvider>
          </div>
        </div>
        <div className="create-requirement__content__header__type-app">
          <label className="create-requirement__content__header__type-app__label">
            Please select type of documents upload:
          </label>
          <Select
            className="create-requirement__content__header__type-app__select"
            value={typeOfApp}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            placeholder="select"
          >
            <MenuItem disabled value="">
              <em>Select</em>
            </MenuItem>
            {listTypeDocument?.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </div>
        <TableRequirement tabledata={tableData} />
        <div className="create-requirement__content__footer">
          <button
            className="create-requirement__content__footer__button add"
            onClick={handleOpenModal}
          >
            Add credential
          </button>
          <button
            className="create-requirement__content__footer__button verify"
            onClick={() => setIsOpenAlert(true)}
          >
            Verify
          </button>
        </div>
      </div>
      {isOpenAlert && (
        <Alert
          onClose={() => setIsOpenAlert(false)}
          content={
            <>
              <p>Complete verification!</p>
              <p>Please check the history for the reports</p>
            </>
          }
        />
      )}
      <Modal
        open={isOpenModal}
        title="Title"
        onOk={handleUpdateFile}
        onCancel={handleCloseModal}
        okText="Upload"
        cancelText="Cancel"
      >
        <Dragger
          beforeUpload={() => false}
          accept="image/jpeg, image/png, image/jpg"
          multiple={true}
          onChange={onChangeUpload}
          fileList={listUpload}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Dragger>
      </Modal>
    </div>
  );
};
