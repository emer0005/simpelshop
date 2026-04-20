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
          <ProductCard id={product.id} title={product.title} description={product.description} img={product.thumbnail} />
      </div>
    );
  });
};

export default ProductContainer;
