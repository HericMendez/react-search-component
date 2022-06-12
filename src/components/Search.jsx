import { useState, useEffect } from "react";
import DisplayItem from "./DisplayItem";

const Search = (props) => {
  const [mockdata, setMockdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    setMockdata(props.data);
  }, [props.data]);
  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };



  return (
    <>
      <div className="mx-auto text-center p-8">
        <form className="py-8">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Lança a braba"
              required
              onChange={onChangeHandler}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="mx-auto text-center p-4">
          <table className="w-['80vw']">
            <tr className="text-justify  justify-between align-center p-8">
              <th>Name</th>
              <th className="text-right">Email</th>
            </tr>
            {mockdata
              .filter((values) => {
                if (searchTerm == "") {
                  return values;
                } else if (
                  values.first_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  values.last_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  values.email.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return values;
                }
              })
             .map((filteredValues, key) => {
                
                return <DisplayItem key={key} value={filteredValues} />;
              })}
          </table>
          
        </div>

      </div>
    </>
  );
};

export default Search;


