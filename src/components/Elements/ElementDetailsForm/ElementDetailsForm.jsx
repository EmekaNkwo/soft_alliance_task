import PropTypes from "prop-types";
import {
  SelectField,
  TextAreaField,
  TextField,
} from "../../../shared/UIs/InputField/InputField";

import "./elementdetailsForm.scss";
import {
  FilledButton,
  OutlinedButton,
} from "../../../shared/UIs/Buttons/CustomButtons";
import {
  elementCategory,
  elementClassification,
  payrun,
} from "../../../shared/constants/data/dropdownData";

const ElementDetailsForm = ({ next, setModalOpen, register, errors }) => {
  return (
    <div className="element_details_form">
      <div className="element_details_form_field">
        <TextField
          name="name"
          label={"Name"}
          register={register}
          errors={errors}
        />
        <SelectField
          name="classificationId"
          label="Element Class"
          register={register}
          errors={errors}
          options={elementClassification}
        />
      </div>
      <div className="element_details_form_field">
        <SelectField
          name="categoryValueId"
          label="Element Category"
          register={register}
          errors={errors}
          options={elementCategory}
        />
        <SelectField
          name="payRunId"
          label="Payrun"
          register={register}
          errors={errors}
          options={payrun}
        />
      </div>
      <TextAreaField
        name="description"
        label="Description"
        register={register}
        errors={errors}
      />
      <TextAreaField
        name="reportingName"
        label="Reporting Name"
        register={register}
        errors={errors}
      />

      <div className="element_details_form_actions">
        <OutlinedButton
          title="Cancel"
          className="outlined_btn"
          onClick={() => {
            setModalOpen(false);
          }}
        />
        <FilledButton title="Next" className="filled_btn" onClick={next} />
      </div>
    </div>
  );
};

export default ElementDetailsForm;

ElementDetailsForm.propTypes = {
  setModalOpen: PropTypes.any,
  register: PropTypes.any,
  errors: PropTypes.any,
  next: PropTypes.func,
};
