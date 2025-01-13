import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-rose-600 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            to="/"
            className="text-3xl text-white font-bold tracking-tight hover:text-rose-200 border-b-2 md:border-0"
          >
            Foodie
          </Link>
          <span className="text-white tracking-tight flex gap-4">
            <Link to="/" className="font-bold hover:text-rose-200">
              Privacy Policy
            </Link>
            <Link to="/" className="font-bold hover:text-rose-200">
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
