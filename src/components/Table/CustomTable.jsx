import { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import "./table.scss";
import PropTypes from "prop-types";

const CustomTable = ({ dataSet, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [data, setData] = useState(dataSet);

  const pageSizeOptions = [5, 10, 15, 20, 50];
  useEffect(() => {
    setData(dataSet);
  }, [dataSet]);

  const table = useReactTable({
    columns,
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

  return (
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
  );
};

export default CustomTable;

CustomTable.propTypes = {
  dataSet: PropTypes.array,
  columns: PropTypes.array,
};
