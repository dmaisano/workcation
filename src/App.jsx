import { useState } from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilters";

const App = () => {
  const [state, setState] = useState({
    isOpen: false,
    dropdownHasFocus: false,
  });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  return (
    <div className="App min-h-full bg-gray-200 antialiased xl:flex xl:flex-col xl:h-full">
      <Header {...{ setState, state, toggle }} />

      <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilter {...{ setState, state, toggle }} />
      </div>
    </div>
  );
};

export default App;
