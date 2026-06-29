import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="bg-red-600 text-white px-2 py-1 rounded mr-1">
            Al
          </span>
          maBetter
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-10 text-lg font-medium">

          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800"
          >
            Resume Templates
          </Link>

          <Link
            to="/my-resumes"
            className="hover:text-blue-600"
          >
            My Resumes
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-600"
          >
            About Us
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;