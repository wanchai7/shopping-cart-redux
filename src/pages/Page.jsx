import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import MyCart from "./MyCart";
const Page = () => {
  // Call the hook correctly
  const pageState = useSelector((state) => state.Page);

  return (
    <div>
      {pageState.home ? <Home /> : <MyCart />}
    </div>
  );
};

export default Page;
