import ProductContainer from "../../components/ProductContainer";
import Navigation from "@/components/Navigation";
import CategoryList from "@/components/CategoryList";

export default function Home({ searchParams }) {
  return (
    <div>
      <Navigation />
      <CategoryList />
      <ProductContainer searchParams={searchParams} />
    </div>
  );
}
