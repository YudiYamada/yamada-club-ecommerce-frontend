import "./categories.component.css";

import axios from "axios";
import { useEffect, useState } from "react";

import env from "../../config/env.config";
import type { Category } from "../../types/category.types";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/categories`);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(categories);

  useEffect(() => {
    console.log(fetchCategories);
  }, []);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))} */}
      </div>
    </div>
  );
}

export default Categories;
