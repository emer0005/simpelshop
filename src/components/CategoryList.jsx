import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const CategoryList = () => {
  return (
    <div className="flex flex-wrap gap-3 max-w-6xl mx-auto">
    <Suspense>
      <FetchCategories />
    </Suspense>
    </div>
  );
};

const FetchCategories = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category, index) => <CategoryElement category={category} key={index} />);
};

export default CategoryList;
