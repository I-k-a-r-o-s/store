import { useState } from "react";
import { useProductStore } from "../store/product";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error(message);
    } else {
      toast.success("Product created successfully");
    }
    console.log("Success", success);
    console.log("Message", message);

    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center pt-10">
      <h1 className="text-2xl text-primary">Create New Product...</h1>
      <div className="card w-150 bg-base-200 card-lg shadow-sm">
        <div className="card-body items-center text-center gap-5">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-lg w-full"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Price"
            className="input input-lg w-full"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <label className="input w-full">
            <span className="label text-lg">https://</span>
            <input
              type="text"
              placeholder="Image URL"
              className="text-lg w-full"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </label>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={handleAddProduct}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
