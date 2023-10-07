import ElementTable from "../../components/Elements/ElementTable";
import { FilledButton } from "../../shared/UIs/Buttons/CustomButtons";
import { SearchInputField } from "../../shared/UIs/InputField/InputField";
import "./element.scss";
import { AiFillControl, AiOutlinePlus } from "react-icons/ai";


const Element = () => {
  return (
    <div className="element">
      <span className="element_title">Elements</span>
      <div className="element_controls">
        <div className="controls_left">
          <SearchInputField placeholder="Search for element" />
          <AiFillControl className="controls_icon" />
        </div>
        <FilledButton
          title="Create Element"
          icon={<AiOutlinePlus />}
          className="control_right_button"
        />
      </div>
      <ElementTable />
    </div>
  );
};

export default Element;
