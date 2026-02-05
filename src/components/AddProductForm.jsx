import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action";

const AlertCircle = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const AddProductForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      imageUrl: "",
      price: "",
      quantity: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };

  const inputClasses =
    "w-full bg-[#3f3f3f] border-none rounded-md p-2.5 text-white focus:ring-2 focus:ring-[#6366f1] outline-none transition-all placeholder:text-gray-500";
  const labelClasses = "block text-[#71717a] text-sm mb-1.5 font-medium";
  const errorClasses = "text-red-400 text-xs mt-1 flex items-center gap-1";

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl sticky top-8">
      <h2 className="text-[#94a3b8] text-lg font-bold text-center mb-6 uppercase tracking-wide">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className={labelClasses}>Product Name</label>
          <input
            {...register("title", { required: "กรุณาระบุชื่อสินค้า" })}
            type="text"
            placeholder="e.g. Gaming Mouse"
            className={`${inputClasses} ${errors.title ? "ring-2 ring-red-400" : ""}`}
          />
          {errors.title && (
            <p className={errorClasses}>
              <AlertCircle size={12} /> {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClasses}>Category</label>
          <select
            {...register("category", { required: "กรุณาเลือกหมวดหมู่" })}
            className={`${inputClasses} ${errors.category ? "ring-2 ring-red-400" : ""}`}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Accessories">Accessories</option>
          </select>
          {errors.category && (
            <p className={errorClasses}>
              <AlertCircle size={12} /> {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClasses}>Image Url</label>
          <input
            {...register("imageUrl", { required: "กรุณาระบุ URL รูปภาพ" })}
            type="text"
            placeholder="https://..."
            className={`${inputClasses} ${errors.imageUrl ? "ring-2 ring-red-400" : ""}`}
          />
          {errors.imageUrl && (
            <p className={errorClasses}>
              <AlertCircle size={12} /> {errors.imageUrl.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Price</label>
            <input
              {...register("price", { required: true, min: 1 })}
              type="number"
              placeholder="0"
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Quantity</label>
            <input
              {...register("quantity", { required: true, min: 0 })}
              type="number"
              placeholder="0"
              className={inputClasses}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5850ec] hover:bg-[#4a41d4] text-white font-medium py-3 rounded-xl mt-2 transition-all active:scale-95 shadow-lg shadow-indigo-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProductForm;
