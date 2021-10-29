import { useState } from "react";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";
import SearchFilter from "./components/SearchFilters";
import { PROPERTY_LOCATIONS } from "./locations";

const App = () => {
  const [state, setState] = useState({
    isOpen: false,
    dropdownHasFocus: false,
  });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="App min-h-full bg-gray-200 antialiased xl:flex xl:flex-col xl:h-full">
      <Header {...{ setState, state, toggle }} />

      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilter {...{ setState, state, toggle }} />
        <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
          {PROPERTY_LOCATIONS.map((location, i) => (
            <div key={i} className={i >= 1 ? `mt-6` : undefined}>
              <div className="px-4 xl:px-8">
                <h3 className="text-gray-900 text-xl">{location.title}</h3>
                <p className="text-gray-600">{location.description}</p>
              </div>
              <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
                <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                  {location.properties.map((property, j) => (
                    <div
                      key={j}
                      className={`sm:mt-0 sm:w-80 sm:flex-shrink-0 ${
                        j >= 1 ? `mt-10 sm:ml-4` : undefined
                      }`}
                    >
                      <PropertyCard {...{ formatter, property }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
