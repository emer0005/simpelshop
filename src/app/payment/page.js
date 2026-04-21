"use client";
import Header from "@/components/Header";
import CardItem from "@/components/CardItem";
import useCart from "@/store/cart";
import OrderDetails from "@/components/OrderDetails";

export default function Payment() {
  const { cart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="grid grid-cols-2 gap-2 max-w-6xl mx-auto text-black">
        <div className="ml-[5rem]">
          <h1 className="font-regular text-xl">Din indkøbskurv</h1>
          {cart.map((product) => (
            <CardItem title={product.title} price={product.price} img={product.img} id={product.id} />
          ))}
        </div>
        <OrderDetails />
      </div>
    </div>
  );
}
