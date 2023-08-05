import { useState } from "react";

function SearchHeader({ search }) {
  const [valueText, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueText);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label> Ne Arıyorsunuz ?</label>
        <input value={valueText} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
