import { useEffect, useState } from "react";
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import axios from "axios";
import "./style.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllBooks();
  },[])
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books books={books}/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
