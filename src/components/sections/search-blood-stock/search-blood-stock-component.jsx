import { useState, useEffect } from "react";
import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const SearchBloodStockComponent = ({
  subheadingText,
  headingText,
  classHint,
}) => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodStock, setBloodStock] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const defaultBloodStock = {
      "A+": { availability: true, pouches: 5 },
      "A-": { availability: true, pouches: 3 },
      "B+": { availability: false, pouches: 0 },
      "B-": { availability: true, pouches: 1 },
      "AB+": { availability: true, pouches: 4 },
      "AB-": { availability: true, pouches: 2 },
      "O+": { availability: true, pouches: 6 },
      "O-": { availability: false, pouches: 0 },
    };
    localStorage.setItem("bloodStock", JSON.stringify(defaultBloodStock));
    setBloodStock(defaultBloodStock);
  }, []);

  const handleSearch = () => {
    const bloodStockData = JSON.parse(localStorage.getItem("bloodStock"));
    const stockInfo = bloodStockData[bloodGroup];
    const availability = stockInfo.availability ? "Available" : "Not available";
    const pouchCount = stockInfo.pouches;

    setSearchResult([{ bloodGroup, availability, pouches: pouchCount }]);

    if (stockInfo.availability) {
      setMessage("!! Appeal for required blood using the above form !!");
    } else {
      setMessage("!! Sorry we are out of this particular type !!");
    }
  };

  const handleInputChange = (e) => {
    setBloodGroup(e.target.value);
  };

  return (
    <WrapperSection>
      <div
        className={`${classHint} bg-off_white wrapper flex flex-col justify-center items-center w-full relative p-6 py-10 sm:py-20 sm:p-20 rounded-rmd z-[25] overflow-hidden`}
        style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
      >
        <GroupedHeadingComponent
          subheadingText={subheadingText}
          headingText={headingText}
          mode="dark"
          position="center"
        />
        <div className="w-full mt-10">
          <form className="grid grid-cols-1 sm:grid-cols-6 gap-2 w-full">
            <select
              name="bloodGroup"
              id="bloodGroup"
              className="w-full p-5 border sm:col-span-4 border-none bg-[#D9D9D9] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onChange={handleInputChange}
              value={bloodGroup}
            >
              <option value="" selected disabled hidden>
                Choose Your Required Blood Group...
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <button
              className="sm:col-span-2 sm:rounded-r-rsm border-dark text-white bg-[#9e152a] hover:border-dark hover:bg-[#ff0000] hover:text-white transition text-black px-8 py-5 text-sm font-bold"
              type="button"
              onClick={handleSearch}
            >
              Search Availability
            </button>
          </form>

          <div className="mt-10 w-full bg-[#d9d9d9] rounded-rsm p-5 justify-start items-start overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left mb-5 border-b border-off_white pb-5 text-xs sm:text-sm">
                  <th className="px-2 py-2 text-start text-red tracking-wide">
                    Blood Group
                  </th>
                  <th className="px-2 py-2 text-start text-red tracking-wide">
                    Availability
                  </th>
                  <th className="px-2 py-2 text-start text-red tracking-wide">
                    Pouch Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchResult.length > 0
                  ? searchResult.map((result) => (
                      <tr
                        key={result.bloodGroup}
                        className="text-start mb-2 border-b border-off_white pb-3 text-xs sm:text-base"
                      >
                        <td className="px-2 py-2">{result.bloodGroup}</td>
                        <td className="px-2 py-2">{result.availability}</td>
                        <td className="px-2 py-2">{result.pouches}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>

          {message && (
            <div className="mt-5 text-center text-[#ff0000] text-lg font-bold">
              {message}
            </div>
          )}
        </div>
      </div>
    </WrapperSection>
  );
};

export default SearchBloodStockComponent;
