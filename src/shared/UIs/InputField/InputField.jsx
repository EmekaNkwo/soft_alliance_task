/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";

import "./inputField.scss";
import { Controller } from "react-hook-form";
import { Select, Switch } from "antd";
export const LargeSearchInputField = ({
  props,
  placeholder,
  inputClassName,
}) => {
  return (
    <div className="largesearchField">
      <input
        type="text"
        className={`search_input ${inputClassName}`}
        placeholder={placeholder}
        {...props}
      />
      <div className="search_icon_container">
        <BsSearch className="search_icon" />
      </div>
    </div>
  );
};

export const SearchInputField = ({ props, placeholder, inputClassName }) => {
  return (
    <div className="searchField">
      <input
        type="text"
        className={`search_input ${inputClassName}`}
        placeholder={placeholder}
        {...props}
      />
      <div className="search_icon_container">
        <BsSearch className="search_icon" />
      </div>
    </div>
  );
};

export const TextField = ({ name, register, label, placeholder, errors }) => {
  const error = errors[name];

  return (
    <div className="textField">
      {label && <label>{label}</label>}
      <input
        placeholder={placeholder}
        type="text"
        {...register(name, { required: true, minLength: 3 })}
      />
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};

export const DateField = ({ name, register, label, errors }) => {
  const error = errors[name];

  return (
    <div className="dateField">
      {label && <label>{label}</label>}
      <input type="date" {...register(name, { required: true })} />
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};

export const SelectField = ({ name, label, errors, register, options }) => {
  const error = errors[name];

  return (
    <div className="selectField">
      <label>{label}</label>
      <select {...register(name, { required: true })}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* <Select {...register(name, { required: true })} options={options} /> */}
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};

export const CheckBoxField = ({ name, label, errors, register }) => {
  const error = errors[name];
  return (
    <div className="checkBoxField">
      <label>{label}</label>
      <div className="checkBox">
        <input type="checkbox" {...register(name, { required: true })} />
      </div>
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};
export const MultiSelectField = ({ name, label, errors, control, options }) => {
  const error = errors[name];

  return (
    <div className="multiselectField">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select mode="multiple" options={options} {...field} />
        )}
      />
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};

export const SwitchField = ({ name, label, errors, control }) => {
  const error = errors[name];

  return (
    <div className="switchField">
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Switch {...field} />}
      />
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};
export const TextAreaField = ({ name, label, errors, register }) => {
  const error = errors[name];
  return (
    <div className="textAreaField">
      <label>{label}</label>
      <textarea
        placeholder={label}
        rows="4"
        cols="50"
        {...register(name, { required: true, minLength: 3 })}
      ></textarea>
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};

export const RadioButtonGroup = ({
  name,
  label,
  options,
  register,
  errors,
}) => {
  const error = errors[name];
  return (
    <div className="radioButtonGroup">
      <label>{label}</label>
      <div className="radioButtonOptions">
        {options.map((option, index) => (
          <div className="radioButtonOption" key={index}>
            <input
              type="radio"
              name={name}
              value={option.value}
              // value={option.value}
              {...register(name, { required: true })}
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
      {error && <p className="errorMesg">Please check the {label}</p>}
    </div>
  );
};
