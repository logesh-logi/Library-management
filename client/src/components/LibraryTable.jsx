import React from "react";

const LibraryTable = ({ data, currentPage, pageSize }) => {
  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the data to display only the current page's data
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <table className="mx-auto max-w-2xl p-4 bg-white border border-gray-300 shadow m-5">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4">Book ID</th>
          <th className="py-2 px-4">Book Name</th>
          <th className="py-2 px-4">Genre</th>
          <th className="py-2 px-4">Author</th>
          <th className="py-2 px-4">Publish Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((book) => (
          <tr key={book.book_id} className="border-t">
            <td className="py-2 px-4">{book.book_id}</td>
            <td className="py-2 px-4">{book.book_name}</td>
            <td className="py-2 px-4">{book.genre}</td>
            <td className="py-2 px-4">{book.author}</td>
            <td className="py-2 px-4">
              {new Date(book.publish_date).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LibraryTable;
