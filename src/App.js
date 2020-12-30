import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { getBooksByTerm } from "./api/GB";
import Pagination from "./components/Pagination";


const App=()=>{
  const [SearchTerm,setSerachTerm]=useState("");
  const [books,setBooks]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [totalPages,setTotalPages]=useState(0);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    await getBooksByTerm(SearchTerm,setBooks,currentPage,setTotalPages);
  };

  const handleChange=(event)=>{
    setSerachTerm(event.target.value);
  }

  const nextPage= async (page_number)=>{
    setCurrentPage(page_number);
    await getBooksByTerm(SearchTerm,setBooks,currentPage,setTotalPages);
  }

  return (<div>
   
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    <BookList books={books} />
    {totalPages>1?<Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />: ""}
    </div>);
};
export default App;
