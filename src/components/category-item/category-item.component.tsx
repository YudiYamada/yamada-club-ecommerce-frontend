import type { Category } from "../../types/category.types";
import { CategoryItemContainer, CategoryName } from "./category-item.styles";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <CategoryItemContainer
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
