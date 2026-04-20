import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-6 text-black font-semibold">
        <Link href="/">Home</Link>
        <Link href="/products">Product</Link>
      </ul>
    </div>
  );
};

export default Navigation;
