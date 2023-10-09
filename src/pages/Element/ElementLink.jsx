import { IoArrowBackCircleSharp } from "react-icons/io5";
import ElementLinks from "../../components/ElementLink/ElementLinks/ElementLinks";
import { useNavigate, useParams } from "react-router-dom";
import { useGetElementDetailsQuery } from "../../redux/api/elementApi";
import { useEffect, useState } from "react";

const ElementLink = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isSuccess, isError, isLoading, error } =
    useGetElementDetailsQuery(id);
  const [elementData, setElementData] = useState(data);
  useEffect(() => {
    if (isSuccess) {
      setElementData(data?.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isSuccess, isError, isLoading, error, navigate]);

  return (
    <div className="element_link">
      <span
        className="element_link_back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoArrowBackCircleSharp />
      </span>
      <span className="element_link_title">Element Details</span>
      <div className="element_detail_container">
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Element Name</span>
            <span className="element_detail_value">{elementData?.name}</span>
          </div>
          <div className="element_detail_cell">
            <span className="element_detail_label">Element Classification</span>
            <span className="element_detail_value">
              {elementData?.classificationId === ""
                ? "null"
                : elementData?.classificationId}
            </span>
          </div>
        </div>
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Element Category</span>
            <span className="element_detail_value">
              {elementData?.categoryValueId === ""
                ? "null"
                : elementData?.categoryValueId}
            </span>
          </div>
          <div className="element_detail_cell">
            <span className="element_detail_label">Payrun</span>
            <span className="element_detail_value">
              {elementData?.payRunId === "" ? "null" : elementData?.payRunId}
            </span>
          </div>
        </div>
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Description</span>
            <span className="element_detail_value">
              {elementData?.description === ""
                ? "null"
                : elementData?.description?.slice(0, 51)}
              ...
            </span>
          </div>
          <div className="element_detail_cell">
            <span className="element_detail_label">Reporting Name</span>
            <span className="element_detail_value">
              {elementData?.reportingName === ""
                ? "null"
                : elementData?.reportingName}
            </span>
          </div>
        </div>
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Effective Start Date</span>
            <span className="element_detail_value">
              {elementData?.effectiveStartDate === ""
                ? "null"
                : elementData?.effectiveStartDate}
            </span>
          </div>
          <div className="element_detail_cell">
            <span className="element_detail_label">Effective End Date</span>
            <span className="element_detail_value">
              {elementData?.effectiveEndDate === ""
                ? "null"
                : elementData?.effectiveEndDate}
            </span>
          </div>
        </div>
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Processing Type</span>
            <span className="element_detail_value">
              {elementData?.processingType === ""
                ? "null"
                : elementData?.processingType}
            </span>
          </div>
          <div className="element_detail_cell">
            <span className="element_detail_label">Pay Frequency</span>
            <span className="element_detail_value">
              {elementData?.payFrequency === ""
                ? "null"
                : elementData?.payFrequency}
            </span>
          </div>
        </div>
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Pay Months</span>
            <span className="element_detail_value">
              {elementData?.selectedMonths === ""
                ? "null"
                : elementData?.selectedMonths}
            </span>
          </div>
          <div className="element_detail_cell">
            <span className="element_detail_label">Prorate</span>
            <span className="element_detail_value">
              {elementData?.prorate === "" ? "null" : elementData?.prorate}
            </span>
          </div>
        </div>
        <div className="element_detail_row">
          <div className="element_detail_cell">
            <span className="element_detail_label">Status</span>
            <span className="element_detail_value">
              {elementData?.status === "" ? "null" : elementData?.status}
            </span>
          </div>
        </div>
      </div>
      <div className="element_link_table">
        <span className="element_link_title">Element Links</span>
        <ElementLinks />
      </div>
    </div>
  );
};

export default ElementLink;
