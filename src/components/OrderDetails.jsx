import useCart from "@/store/cart";
const OrderDetails = () => {
  const { cart } = useCart();
  console.log("lægden af mit array", cart.length);
  return (
    <section className="bg-[#E9E6E6] rounded-lg max-w-sm h-115 ">
      <div className="ml-[1rem] pt-[1rem] pb-[1rem]">
        <h1 className="text-3xl font-Regular pl-2 ">Ordreoversigt</h1>
        <div className="flex gap-4 mt-[1rem] pl-4 pt-4 text-2xl text-gray-700">
          <h2>Antal varer:</h2>
          <p>{cart.length}</p>
        </div>
        <div className="flex gap-4 mt-[1rem] pl-4 pt-4 text-2xl text-gray-700">
          <h2>Subtotal:</h2>
          <p>{cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)},-</p>
        </div>
        <button
          onClick={() => {
            setCart(id, title, price, img);
          }}
          className="bg-[#C5A582] px-5 py-1 mt-5 text-white cursor-pointer ml-4 hover:opacity-80"
        >
          Gå til betaling
        </button>
      </div>
    </section>
  );
};

export default OrderDetails;
