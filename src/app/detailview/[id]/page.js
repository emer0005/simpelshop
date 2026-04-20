import Icon from "@/components/Icon";
import Navigation from "@/components/Navigation";
import ProductDetails from "@/components/ProductDetails";

const detailview = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  return (
    <>
      <Navigation />
      <Icon />
      <ProductDetails title={product.title} description={product.description} img={product.thumbnail} id={product.id} price={product.price} />
    </>
  );
};

export default detailview;
