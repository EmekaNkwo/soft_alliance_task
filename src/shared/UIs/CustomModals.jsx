/* eslint-disable react/prop-types */
import { Modal } from "antd";

const CustomModals = ({
  isModalOpen,
  setOpenModal,
  children,
  modalName,
  handleCancel,
}) => {
  return (
    <>
      <Modal
        title={modalName}
        open={isModalOpen}
        closable={false}
        onOk={() => setOpenModal(false)}
        onCancel={handleCancel}
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
        width={350}
      >
        <>{children}</>
      </Modal>
    </>
  );
};

export default CustomModals;
