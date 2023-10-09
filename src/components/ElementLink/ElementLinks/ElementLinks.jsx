/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CustomTable from "../../Table/CustomTable";
import { SearchInputField } from "../../../shared/UIs/InputField/InputField";
import { FilledButton } from "../../../shared/UIs/Buttons/CustomButtons";
import { AiOutlinePlus } from "react-icons/ai";
import CreateElementLink from "../CreateElementLink";

import "./elementLinks.scss";
import { useGetElementLinksQuery } from "../../../redux/api/elementApi";

const columns = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Genre",
    accessorKey: "genre",
  },
  {
    header: "Rating",
    accessorKey: "rating",
  },
];

const ElementLinks = ({ id }) => {
  const [isModalOpen, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(!isModalOpen);
  };
  const { data, isLoading, isError, error, isSuccess } =
    useGetElementLinksQuery(id);

  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setLinksData(data?.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error, isError, isSuccess]);

  console.log(linksData);
  return (
    <>
      {isModalOpen && (
        <CreateElementLink
          setOpenModal={setOpenModal}
          isModalOpen={isModalOpen}
        />
      )}
      <div className="element_link_layout">
        <div className="element_link_layout_controls">
          <div className="controls_left">
            <SearchInputField placeholder="Search for element links" />
          </div>

          <FilledButton
            title="Create Element Links"
            icon={<AiOutlinePlus />}
            className="element_links_right_button"
            onClick={showModal}
          />
        </div>
        <div className="">
          {isLoading ? (
            "Loading ..."
          ) : (
            <>
              {linksData?.length === 0 ? (
                "No Results"
              ) : (
                <>
                  <CustomTable dataSet={linksData} columns={columns} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ElementLinks;
