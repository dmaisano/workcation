import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App min-h-full bg-gray-200 antialiased xl:flex xl:flex-col xl:h-full">
      <Header {...{ toggle, isOpen }} />
    </div>
  );
};

export default App;
