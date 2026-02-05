import { useState } from "react";
import ProductItem from "../components/ProductItem";
import AddProductForm from "../components/AddProductForm";
import { useSelector } from "react-redux";
const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* ส่วนแสดงรายการสินค้า (2 คอลัมน์) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {products.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>

        {/* ส่วนแบบฟอร์ม Add Product */}
        <aside className="lg:w-[320px] flex-shrink-0">
          <AddProductForm />
        </aside>
      </div>
    </div>
  );
};

export default Home;
