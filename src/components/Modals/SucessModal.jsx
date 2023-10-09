/* eslint-disable react/prop-types */
import CustomModals from "../../shared/UIs/CustomModals";

const SucessModal = ({ isModalOpen, setOpenModal }) => {
  return (
    <div>
      <CustomModals isModalOpen={isModalOpen} setOpenModal={setOpenModal}>
        Test
      </CustomModals>
    </div>
  );
};

export default SucessModal;
