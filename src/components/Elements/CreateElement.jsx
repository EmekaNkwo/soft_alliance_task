/* eslint-disable react/jsx-key */
import { Modal, Steps } from "antd";
import PropTypes from "prop-types";
import "./elements.scss";
import { useState } from "react";
import ElementDetailsForm from "./ElementDetailsForm/ElementDetailsForm";
import AdditionalDetailsForm from "./AdditionalDetailsForm/AdditionalDetailsForm";
import { useForm } from "react-hook-form";
const CreateElement = ({ isModalOpen, setOpenModal }) => {
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
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: false,
    },
  });

  const steps = [
    {
      title: "Element Details",
      content: (
        <>
          <ElementDetailsForm
            setModalOpen={setOpenModal}
            register={register}
            errors={errors}
            next={next}
          />
        </>
      ),
    },
    {
      title: "Additional Details",
      content: (
        <>
          <AdditionalDetailsForm
            handleSubmit={handleSubmit}
            prev={prev}
            control={control}
            register={register}
            errors={errors}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <Modal
        title="Create Element"
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
        width={600}
      >
        <div className="create_element">
          <Steps current={current} labelPlacement="vertical" items={steps} />

          <div>{steps[current].content}</div>
        </div>
      </Modal>
    </>
  );
};

export default CreateElement;

CreateElement.propTypes = {
  isModalOpen: PropTypes.boolean,
  setOpenModal: PropTypes.any,
};
