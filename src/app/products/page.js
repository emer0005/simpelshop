import ProductContainer from "../../components/ProductContainer";
import Navigation from "@/components/Navigation";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";

export default function Home({ searchParams }) {
  return (
    <div>
      <Header />
      <CategoryList />
      <ProductContainer searchParams={searchParams} />
    </div>
  );
}
