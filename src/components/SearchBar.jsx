const SearchBar = () => {
  return (
    <form role="search">
      <input className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none text-lg" type="search" id="search_breeds" name="q" placeholder="Search..." />
    </form>
  );
};

export default SearchBar;
