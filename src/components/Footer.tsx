import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-b-2 border-rose-600 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-rose-600">Chicks.com</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
