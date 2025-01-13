import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <>
      <div className="border-b-2 border-b-rose-600 py-5 px-3">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-rose-600 hover:text-rose-500"
          >
            Foodie
          </Link>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
