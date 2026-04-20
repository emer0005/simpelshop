"use client";
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import CardItem from "@/components/CardItem";
import useCart from "@/store/cart";
import OrderDetails from "@/components/OrderDetails";

export default function Payment() {
  const { cart } = useCart();
  return (
    <div>
      <Navigation />
      <Icon />
      <OrderDetails />
      {cart.map((product) => (
        <CardItem title={product.title} price={product.price} img={product.img} id={product.id} />
      ))}
    </div>
  );
}
