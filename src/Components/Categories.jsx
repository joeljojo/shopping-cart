import { useState, useEffect } from "react";
import productsApi from "../Services";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
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
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
      >
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
