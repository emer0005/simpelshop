import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-6 text-black text-xl font-semibold">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/products">
          Product
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
