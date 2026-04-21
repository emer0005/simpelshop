import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";

const detailview = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  return (
    <>
      <Header />
      <ProductDetails
        title={product.title}
        description={product.description}
        img={product.thumbnail}
        id={product.id}
        price={product.price}
      />
    </>
  );
};

export default detailview;
