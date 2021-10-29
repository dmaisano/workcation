import { useEffect } from "react";

const Dropdown = ({ setState, state, toggle }) => {
  useEffect(() => {
    window.addEventListener(`keydown`, (event) => {
      if (state.isOpen && event.key === "Escape") {
        setState({ ...state, isOpen: false });
      }
    });

    // callback fn called on component unmount
    return () => {
      return window.removeEventListener(`keydown`, () => {});
    };
  });
  return (
    <div id="Dropdown" className="relative hidden sm:block">
      <button
        id="dropdown-trigger"
        onClick={() => toggle()}
        onFocus={() => setState({ ...state, dropdownHasFocus: true })}
        onBlur={() => setState({ ...state, dropdownHasFocus: false })}
      >
        <span
          className={`block h-8 w-8 overflow-hidden rounded-full border-2 ${
            state.dropdownHasFocus || state.isOpen
              ? `border-white xl:border-indigo-500`
              : `border-gray-600 xl:border-gray-300`
          }`}
        >
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
        </span>
      </button>
      <div className={state.isOpen ? `block` : `hidden`}>
        <button
          onClick={() => setState({ ...state, isOpen: false })}
          type="button"
          className="z-30 block fixed inset-0 w-full h-full cursor-default"
        ></button>
        <div className="absolute z-40 right-0">
          <div className="mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl">
            <a
              href="#account"
              className="block hover:text-white text-gray-800 px-4 py-2 hover:bg-indigo-500"
            >
              Account settings
            </a>
            <a
              href="#support"
              className="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500"
            >
              Support
            </a>
            <a
              href="#sign-out"
              className="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
