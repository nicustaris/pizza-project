import React from "react";

const Categories = ({ value, onChangeCategory }) => {
  const categoriesNav = [
    "All",
    "Meat",
    "Vegetarian",
    "Grill",
    "Spicy",
    "Mixed",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesNav.map((categoryName, i) => (
          <li
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
