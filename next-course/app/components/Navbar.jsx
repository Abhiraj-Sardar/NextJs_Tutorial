import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-0 w-full bg-red-600">
      <ul>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="links-container ">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/portfolio">
            Portfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;