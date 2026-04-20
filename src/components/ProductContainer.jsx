import ProductCard from "./ProductCard";

const ProductContainer = ({ searchParams }) => {
  return (
    <div>
      <FetchProduct searchParams={searchParams} />
    </div>
  );
};

const FetchProduct = async ({ searchParams }) => {
  "use server";
  const { category } = await searchParams;
  const url = category ? `https://dummyjson.com/products/category/${category}?limit=100` : "https://dummyjson.com/products?limit=100";

  const response = await fetch(url);
  const data = await response.json();
  const products = data.products;

  return products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard id={product.id} title={product.title} description={product.description} img={product.thumbnail} price={product.price} />
      </div>
    );
  });
};

export default ProductContainer;
