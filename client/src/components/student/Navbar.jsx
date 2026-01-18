import { useState } from "react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const { navigate, isEducator } = useAppContext();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const isStudentRoute = location.pathname.includes("/course-list");

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg ${
        isStudentRoute ? "bg-white" : "bg-cyan-100/70 border-b"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-20 py-4">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Right section */}
        <div className="flex items-center gap-6">
          {user && (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="font-semibold text-gray-700 hover:text-cyan-600 transition"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>

              <Link
                to="/my-enrollment"
                className="font-medium text-gray-600 hover:text-cyan-600 transition"
              >
                My Enrollment
              </Link>
            </>
          )}

          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={openSignIn}
              className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition"
            >
              Create account
            </button>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-6 py-4">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-9 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                  setOpen(false);
                }}
                className="block w-full text-left font-medium text-gray-700"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>

              <Link
                to="/my-enrollment"
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-700"
              >
                My Enrollment
              </Link>
            </>
          )}

          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={openSignIn}
              className="w-full bg-cyan-600 text-white py-2 rounded-lg"
            >
              Create account
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
