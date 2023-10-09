/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  FilledButton,
  OutlinedButton,
} from "../../../shared/UIs/Buttons/CustomButtons";

import "./additionalDetailsForm.scss";
import {
  DateField,
  MultiSelectField,
  RadioButtonGroup,
  SelectField,
} from "../../../shared/UIs/InputField/InputField";
import {
  YesorNo,
  months,
  payFrequency,
  processingType,
  statusOptions,
} from "../../../shared/constants/data/dropdownData";
import { useCreateElementMutation } from "../../../redux/api/elementApi";
import { useEffect } from "react";
import { message } from "antd";

const AdditionalDetailsForm = ({
  handleSubmit,
  prev,
  register,
  control,
  errors,
  setModalOpen,
}) => {
  const [createElement, { data, isSuccess, isError, error, isLoading }] =
    useCreateElementMutation();
  const onSubmit = async (data) => {
    await createElement(data);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Element created successfully");
      setModalOpen(false);
    }
    if (isError) {
      message.error(error?.data?.message);
    }
  }, [data, error?.data?.message, isError, isSuccess]);
  return (
    <div className="additional_details_form">
      <div className="element_details_form_field">
        <DateField
          name="effectiveStartDate"
          label={"Effective Start Date"}
          register={register}
          errors={errors}
        />
        <DateField
          name="effectiveEndDate"
          label={"Effective End Date"}
          register={register}
          errors={errors}
        />
      </div>
      <div className="element_details_form_field">
        <RadioButtonGroup
          name={"processingType"}
          label={"Processing Type"}
          options={processingType}
          register={register}
          errors={errors}
        />
        <RadioButtonGroup
          name={"payFrequency"}
          label={"Pay Frequency"}
          options={payFrequency}
          register={register}
          errors={errors}
        />
      </div>
      <div className="element_details_form_field">
        <MultiSelectField
          name="selectedMonths"
          label="Selected Pay Months"
          control={control}
          errors={errors}
          options={months}
        />
      </div>

      <div className="element_details_form_field">
        <SelectField
          name="prorate"
          label="Prorate"
          register={register}
          errors={errors}
          options={YesorNo}
        />
        <RadioButtonGroup
          name={"status"}
          label={"Status"}
          options={statusOptions}
          register={register}
          errors={errors}
        />
      </div>
      <div className="additional_details_actions">
        <OutlinedButton title="Back" className="outlined_btn" onClick={prev} />
        <FilledButton
          title={isLoading ? "Creating..." : "Create Element"}
          className="filled_btn"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default AdditionalDetailsForm;
