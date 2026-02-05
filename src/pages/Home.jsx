import { useState } from "react";
import ProductItem from "../components/ProductItem";
import AddProductForm from "../components/AddProductForm";
import { useSelector } from "react-redux";
const Home = () => {
  const products = useSelector((state) => state.products);

  const filteredProducts = products.filter((item) => item.quantity > 0);

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* ส่วนแสดงรายการสินค้า (2 คอลัมน์) */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {filteredProducts.map((item, index) => (
                <ProductItem key={index} product={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-500">สินค้าหมดชั่วคราว</h3>
              <p className="text-gray-400 mt-2">โปรดรอการเติมสต็อกสินค้าใหม่</p>
            </div>
          )}
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
