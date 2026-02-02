import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newProduct = {
      id: Date.now(),
      name: data.name,
      category: data.category,
      imageUrl: data.imageUrl,
      price: parseInt(data.price),
      quantity: parseInt(data.quantity),
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="flex flex-col gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Product Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            {...register("category", { required: true })}
            placeholder="Category"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            {...register("imageUrl", { required: true })}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              type="number"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
