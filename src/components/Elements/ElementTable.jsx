/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from "react";
import CustomTable from "../Table/CustomTable";
import { useGetElementsQuery } from "../../redux/api/elementApi";

const columns = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Element Category",
    accessorKey: "categoryValueId",
  },
  {
    header: "Element Classification",
    accessorKey: "classificationId",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Date & Time Modified",
    accessorKey: "",
    cell: (row) => {
      return <div>{new Date(row.row.original.createdAt).toLocaleString()}</div>;
    },
  },
  {
    header: " Modified By",
    accessorKey: "modifiedBy",
  },
];

const ElementTable = () => {
  const { data, isSuccess, isError, isLoading, error } = useGetElementsQuery();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setTableData(data?.data?.content);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error, isError, isSuccess]);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {tableData === undefined || tableData.length === 0 ? (
            "No results"
          ) : (
            <>
              <CustomTable dataSet={tableData} columns={columns} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(ElementTable);
