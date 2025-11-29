import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";
import type { Category } from "../../types/category.types";
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesFromFirestore: Category[] = [];

        const querySnapshot = await getDocs(
          collection(db, "categories").withConverter(categoryConverter),
        );

        querySnapshot.forEach((doc) => {
          categoriesFromFirestore.push(doc.data());
        });

        setCategories(categoriesFromFirestore);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
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
