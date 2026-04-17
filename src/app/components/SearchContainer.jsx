import BtnSearch from "./BtnSearch";
import SearchBar from "./SearchBar";

const SearchContainer = () => {
  return (
    <div className="flex gap-3">
      <BtnSearch />
      <SearchBar />
    </div>
  );
};

export default SearchContainer;
