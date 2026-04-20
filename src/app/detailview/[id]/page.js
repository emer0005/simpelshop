import ProductDetails from "@/components/ProductDetails";

const detailview = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  return (
    <>
      <ProductDetails title={product.title} description={product.description} img={product.thumbnail} />
    </>
  );
};

export default detailview;
