import { useState } from "react";

function SearchForm({ handleSubmit }) {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
