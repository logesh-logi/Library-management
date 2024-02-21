import { useEffect, useState } from "react";

function BookData() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/getBooks";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  }, []);
  return bookData;
}

export default BookData;
