import "./App.css";
import SearchHeader from "./components/SearchHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="All">
      <div className="App">
        <SearchHeader search={handleSubmit} />
        <ImageList imagesPlaceholder={images} />
        <a className="TopButton" href="#top">
        <span>&#8593;</span> Scroll Up <span>&#8593;</span>
        </a>
      </div>
    </div>
  );
}

export default App;
