import { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Dropdown, Space, message } from "antd";

import "./table.scss";
import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete, AiFillEdit, AiOutlineEye } from "react-icons/ai";
import DeleteModal from "../Modals/DeleteModal";
import SucessModal from "../Modals/SucessModal";
import { useNavigate } from "react-router-dom";

const CustomTable = ({ dataSet, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [data, setData] = useState(dataSet);

  const pageSizeOptions = [5, 10, 15, 20, 50];
  useEffect(() => {
    setData(dataSet);
  }, [dataSet]);

  const tablecolumns = [
    ...columns,
    {
      id: "actions",
      header: "Actions",
      cell: (row) => (
        <div className="table_actions">
          <Dropdown
            menu={{
              items: [
                {
                  label: (
                    <span
                      onClick={() => handleView(row)}
                      className="table_actions_view"
                    >
                      <AiOutlineEye /> View Element Links
                    </span>
                  ),
                },
                {
                  label: (
                    <span
                      onClick={() => handleEdit(row)}
                      className="table_actions_view"
                    >
                      <AiFillEdit /> Edit Element
                    </span>
                  ),
                },
                {
                  label: (
                    <span
                      onClick={() => handleDelete(row)}
                      className="table_actions_delete"
                    >
                      <AiFillDelete /> Delete Element
                    </span>
                  ),
                },
              ],
            }}
          >
            <Space>
              <BsThreeDotsVertical className="table_actions_more" />
            </Space>
          </Dropdown>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    columns: tablecolumns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const navigate = useNavigate();

  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const handleEdit = (row) => {
    const rowId = row.row.original.id;
    message.info(`Feature coming soon for element ${rowId}`);
  };

  const handleDelete = (row) => {
    sessionStorage.setItem("elementId", row.row.original.id);
    setDeleteModal(!isDeleteModal);
  };
  const handleView = (row) => {
    const rowId = row.row.original.id;
    navigate(`/dashboard/element/${rowId}`);
  };

  return (
    <>
      {isDeleteModal && (
        <DeleteModal
          isModalOpen={isDeleteModal}
          setOpenModal={setDeleteModal}
        />
      )}
      {isSuccessModal && (
        <SucessModal
          isModalOpen={isSuccessModal}
          setOpenModal={setSuccessModal}
        />
      )}
      <div className="table">
        <table className="main_table">
          <thead className="main_table_head">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="main_table_row">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="main_table_head_cell"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: "▲", desc: "▼" }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="main_table_body">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="main_table_body_row">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="main_table_body_row_cell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <div className="page_size_dropdown">
            <label>Showing</label>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label>out of {dataSet.length}</label>
          </div>
          <div className="pagination_button">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <span>{table.getState().pagination.pageIndex + 1}</span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomTable;

CustomTable.propTypes = {
  dataSet: PropTypes.array,
  columns: PropTypes.array,
};
