import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER_BY_CATEGORY } from '../redux/products/action.Type';

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const handlePageChange = (pageType) => {
    dispatch({ type: pageType });
  };

  const handleCategoryChange = (category) => {
    dispatch({ type: FILTER_BY_CATEGORY, payload: category });
  };

  const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "synthwave"];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.querySelector('html').setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeChange = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Shopping Cart</a>
      </div>

      <div className="flex-none">
        <button className="btn btn-ghost" onClick={() => handlePageChange("Home")}>Home</button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            Categories
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            {categories.map((category) => (
              <li key={category}>
                <a onClick={() => handleCategoryChange(category)}>{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            {themes.map((theme) => (
              <li key={theme}>
                <input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)} value={theme} onChange={() => handleThemeChange(theme)}/>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-none" onClick={() => handlePageChange("CART")}>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-lg indicator-item">{cartItems.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;