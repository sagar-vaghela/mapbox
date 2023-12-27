import Link from "next/link";

const Header = () => {
  return (
    <header className="relative h-20">
      <div className="relative h-full flex items-center px-16">
        <Link href="/">
          <h2 className="text-2xl text-white">Blogs Site</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
