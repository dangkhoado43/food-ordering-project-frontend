import landingImage from "../assets/images/landing.png";
import appDownloadImage from "../assets/images/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="text-4xl font-bold tracking-tight text-rose-600">
            Tuck into a takeway today
          </h1>
          <span className="text-xl">Food Just a Click Away!</span>
          <SearchBar
            placeHolder="Search by Restaurant City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img src={landingImage} />
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <span className="font-bold text-2xl tracking-tight">
              Order takeaway tonight!
            </span>
            <span>
              Download the Foodie App for faster ordering and personalised
              recommendations
            </span>
            <img src={appDownloadImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
