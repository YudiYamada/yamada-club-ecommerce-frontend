import "./category-item.component.css";

import type { Category } from "../../types/category.types";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
}

export default CategoryItem;
