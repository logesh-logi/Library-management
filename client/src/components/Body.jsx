import { Pagination } from "@material-ui/lab";
import BookData from "./BookData";
import LibraryTable from "./LibraryTable";
import { useState, useEffect } from "react";

function Body() {
  const pageSize = 5; // Number of items per page
  const [page, setPage] = useState(1);

  const [filter, setFilter] = useState({
    author: "",
    title: "",
    genre: "",
    publishedYear: "",
  });

  const sampleData = BookData();
  const [filteredAndPaginatedData, setFilteredAndPaginatedData] =
    useState(sampleData);

  useEffect(() => {
    // Update filteredAndPaginatedData when filter or sampleData changes
    const filteredData = sampleData.filter((book) => {
      const authorMatch =
        book.author.toLowerCase().includes(filter.author.toLowerCase()) ||
        filter.author === "";
      const titleMatch =
        book.book_name.toLowerCase().includes(filter.title.toLowerCase()) ||
        filter.title === "";
      const genreMatch =
        book.genre.toLowerCase().includes(filter.genre.toLowerCase()) ||
        filter.genre === "";
      const publishedYearMatch =
        book.publish_date.includes(filter.publishedYear) ||
        filter.publishedYear === "";

      return authorMatch && titleMatch && genreMatch && publishedYearMatch;
    });

    const paginatedData = filteredData.slice(
      (page - 1) * pageSize,
      page * pageSize
    );
    setFilteredAndPaginatedData(paginatedData);
  }, [sampleData, filter, page, pageSize]);

  const handleFilterChange = (filterKey, value) => {
    setPage(1); // Reset to the first page when filter changes
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterKey]: value,
    }));
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-1xl font-bold mb-4">Library Details</h1>
      <div className="mb-4 flex">
        <div className="flex m-5">
          <label>
            Author:
            <input
              className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-gray-500"
              type="text"
              value={filter.author}
              onChange={(e) => handleFilterChange("author", e.target.value)}
            />
          </label>
        </div>
        <div className="flex m-5">
          <label>
            Title:
            <input
              className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-gray-500"
              type="text"
              value={filter.title}
              onChange={(e) => handleFilterChange("title", e.target.value)}
            />
          </label>
        </div>
        <div className="flex m-5">
          <label>
            Genre:
            <input
              className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-gray-500"
              type="text"
              value={filter.genre}
              onChange={(e) => handleFilterChange("genre", e.target.value)}
            />
          </label>
        </div>
        <div className="flex m-5">
          <label>
            Published Year:
            <input
              className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-gray-500"
              type="text"
              value={filter.publishedYear}
              onChange={(e) =>
                handleFilterChange("publishedYear", e.target.value)
              }
            />
          </label>
        </div>
      </div>
      <LibraryTable data={filteredAndPaginatedData} />
      <Pagination
        count={Math.ceil(sampleData.length / pageSize)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}

export default Body;
