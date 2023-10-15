import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      {" "}
      <div className=" overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img
          src={book.image}
          alt=""
          className=" object-cover w-full h-56 md:h-64 xl:h-80"
        />
        <div className=" absolute px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 inset-0 transition-opacity duration-200 flex flex-col">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle.substring(1, 45)}...</p>
          <br />
          <p className=" mt-auto">{book.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
