import { useSelector } from "react-redux";
import Home from "./Home";
import MyCart from "./MyCart";
import Checkout from "./Checkout";
const Page = () => {
  const page = useSelector((state) => state.pages);
  return (
    <div>
      {page.checkout ? (
        <Checkout />
      ) : page.home ? (
        <Home />
      ) : (
        <MyCart />
      )}
    </div>
  );
};

export default Page;
