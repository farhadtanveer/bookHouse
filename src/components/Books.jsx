import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className=" my-container">
      <div className=" grid gap-6 mb-6 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <p>{book.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Books;
