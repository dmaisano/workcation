import { useState } from "react";
import Header from "./components/Header";

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
    </div>
  );
};

export default App;
