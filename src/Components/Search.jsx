const Search = ({ query, setSearchQuery }) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={query}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};
export default Search;
