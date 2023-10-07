/* eslint-disable react-refresh/only-export-components */
import React from "react";
import CustomTable from "../Table/CustomTable";

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

const data = [
  {
    id: 1,
    name: "Harry Potter",
    genre: "Fantasy",
    rating: 4,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    genre: "Fantasy",
    rating: 5,
  },
];
const ElementTable = () => {
  return (
    <div>
      <CustomTable dataSet={data} columns={columns} />
    </div>
  );
};

export default React.memo(ElementTable);
