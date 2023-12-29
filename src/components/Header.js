import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative h-20">
      <div className="relative h-full flex items-center justify-between px-16">
        <Link href="/">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            Blogs Site
          </h2>
        </Link>
        <nav className="flex gap-6">
          <Link href={'/'}>Users</Link>
          <Link href={'/map'}>Maps</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
