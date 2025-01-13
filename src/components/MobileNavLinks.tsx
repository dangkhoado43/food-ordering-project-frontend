import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
  return (
    <>
      <Link to="/" className="text-left font-bold hover:text-rose-600">
        Home
      </Link>
      <Link to="/" className="text-left font-bold hover:text-rose-600">
        Order Status
      </Link>
      <Link to="/" className="text-left font-bold hover:text-rose-600">
        My Restaurant
      </Link>
      <Link to="/" className="text-left font-bold hover:text-rose-600">
        My Profile
      </Link>
      <Button className="active:text-black active:bg-white active:border active:border-black">
        Log out
      </Button>
    </>
  );
};

export default MobileNavLinks;
