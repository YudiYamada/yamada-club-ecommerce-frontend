import axios from "axios";
import { useEffect, useState } from "react";

import env from "../../config/env.config";
import type { Category } from "../../types/category.types";
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

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
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
}

export default Categories;
