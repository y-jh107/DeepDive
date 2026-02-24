import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="상품 검색"
      value={input}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
