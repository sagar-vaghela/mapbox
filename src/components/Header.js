import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-100 h-20 flex items-center px-16">
      <Link href="/">
        <h2 className="text-2xl">Blogs Site</h2>
      </Link>
    </header>
  );
};

export default Header;
