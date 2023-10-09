/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useDeleteElementMutation } from "../../redux/api/elementApi";
import {
  FilledButton,
  OutlinedButton,
} from "../../shared/UIs/Buttons/CustomButtons";
import CustomModals from "../../shared/UIs/CustomModals";
import { message } from "antd";

const DeleteModal = ({ isModalOpen, setOpenModal }) => {
  const [deleteElement, { data, isSuccess, isError, error, isLoading }] =
    useDeleteElementMutation();
  const elementId = sessionStorage.getItem("elementId");
  const handleDelete = async () => {
    await deleteElement(elementId);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Element deleted successfully");
      setOpenModal(false);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error, isError, isSuccess, setOpenModal]);
  return (
    <>
      <CustomModals
        isModalOpen={isModalOpen}
        setOpenModal={setOpenModal}
        modalName=""
      >
        <div className="">
          Are you sure?
          <div className="deleteControls">
            <FilledButton
              title={isLoading ? "Deleting..." : "Yes"}
              onClick={handleDelete}
            />
            <OutlinedButton title="No" onClick={() => setOpenModal(false)} />
          </div>
        </div>
      </CustomModals>
    </>
  );
};

export default DeleteModal;
