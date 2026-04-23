"use client";
import Header from "@/components/Header";
import CardItem from "@/components/CardItem";
import useCart from "@/store/cart";
import OrderDetails from "@/components/OrderDetails";

export default function Payment() {
  const { cart } = useCart();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid grid-cols-2 gap-95 max-w-6xl mx-auto text-black">
        <div>
          <h1 className="font-regular text-2xl mb-[2rem]">Din indkøbskurv</h1>
          {cart.map((product) => (
            <CardItem title={product.title} price={product.price} img={product.img} id={product.id} />
          ))}
        </div>
        <OrderDetails />
      </div>
    </div>
  );
}
