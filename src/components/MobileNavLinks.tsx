import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link to="/" className="text-left font-bold hover:text-rose-600">
        Home
      </Link>
      <Link to="/" className="text-left font-bold hover:text-rose-600">
        Order Status
      </Link>
      <Link to="/manage-restaurant" className="text-left font-bold hover:text-rose-600">
        Manage Restaurant
      </Link>
      <Link to="/user-profile" className="text-left font-bold hover:text-rose-600">
        My Profile
      </Link>
      <Button onClick={() => logout()} className="flex items-center active:text-black active:bg-white active:border active:border-black">
        Log out
      </Button>
    </>
  );
};

export default MobileNavLinks;
