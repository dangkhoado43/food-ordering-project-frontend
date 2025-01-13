import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  return (
    <>
      <span className="flex space-x-2 items-center gap-3">
        {/* <Link to="/" className="font-bold hover:text-rose-600">
          Order Status
        </Link>
        <UsernameMenu/> */}
        <Link to="/" className="font-bold hover:text-rose-600">
            Home
        </Link>
        <Link to="/" className="font-bold hover:text-rose-600">
            Products
        </Link>
        <Link to="/" className="font-bold hover:text-rose-600">
            About
        </Link>
        <Button className="font-bold bg-rose-600 hover:bg-rose-500 active:text-rose-600 active:bg-white active:border active:border-rose-600">
          Login
        </Button>
      </span>
    </>
  );
};

export default MainNav;
