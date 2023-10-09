/* eslint-disable react/jsx-key */
import { Modal, Steps } from "antd";
import PropTypes from "prop-types";

import { useState } from "react";

import { useForm } from "react-hook-form";
import StaffInformation from "./StaffInformation/StaffInformation";
import AdditionInformation from "./AdditionInformation/AdditionInformation";
import ProcessingInformation from "./ProcessingInformation/ProcessingInformation";
const CreateElementLink = ({ isModalOpen, setOpenModal }) => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const steps = [
    {
      title: "Staff Information",
      content: (
        <>
          <StaffInformation />
        </>
      ),
    },
    {
      title: "Additional Information",
      content: (
        <>
          <AdditionInformation />
        </>
      ),
    },
    {
      title: "Processing Information",
      content: (
        <>
          <ProcessingInformation />
        </>
      ),
    },
  ];
  return (
    <>
      <Modal
        title="Create Element Link"
        open={isModalOpen}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        width={650}
      >
        <div className="create_element">
          <Steps current={current} labelPlacement="vertical" items={steps} />

          <div>{steps[current].content}</div>
        </div>
      </Modal>
    </>
  );
};

export default CreateElementLink;

CreateElementLink.propTypes = {
  isModalOpen: PropTypes.boolean,
  setOpenModal: PropTypes.any,
};
