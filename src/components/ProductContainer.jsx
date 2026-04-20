import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div>
      <FetchProduct />
    </div>
  );
};

const FetchProduct = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return products.map((product) => {
    return (
      <div key={product.id}>
        <Link href={`/detailview/${product.id}`}>
          <ProductCard key={product.id} title={product.title} description={product.description} img={product.thumbnail} />
        </Link>
      </div>
    );
  });
};

export default ProductContainer;
