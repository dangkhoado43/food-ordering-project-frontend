import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Banner />
        <div className="container mx-auto flex-1 py-10 px-3">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
