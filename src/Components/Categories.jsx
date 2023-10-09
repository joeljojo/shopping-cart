import { useState, useEffect } from "react";
import productsApi from "../Services";

const Categories = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);

  const getProductCategories = async () => {
    const productCategories = await productsApi.fecthCategories();
    setCategories(productCategories);
  };

  useEffect(() => {
    getProductCategories();
  }, []);

  return (
    <div>
      <label htmlFor="categories">Select Product Category</label>
      <select
        name="categories"
        id="categories"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
