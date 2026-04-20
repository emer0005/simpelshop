import { IoSearch } from "react-icons/io5";

const BtnSearch = () => {
  return (
    <div className="w-12 h-13 bg-red-200 rounded-full flex items-center justify-center cursor-pointer">
      <IoSearch className="w-8 h-8 text-white" />
    </div>
  );
};

export default BtnSearch;
