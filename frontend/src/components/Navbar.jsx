import { ShoppingCart, SquarePlus } from "lucide-react";
import { Link } from "react-router";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Store
          <ShoppingCart />
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/create">
          <button className="btn btn-circle btn-ghost mx-2">
            <SquarePlus />
          </button>
        </Link>
        <button className="btn btn-circle btn-ghost mx-2">
          <Darkmode />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
