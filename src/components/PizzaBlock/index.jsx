import React from "react";

const PizzaBlock = ({ name, price, imageUrl, sizes, types }) => {
  const [pizzaCount, setPizzaCount] = React.useState(0);
  const typesName = ["Thin", "Regular"];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const productAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza-block-container">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId, i) => (
              <li
                onClick={() => setActiveType(typeId)}
                key={i}
                className={activeType === typeId ? "active" : ""}
              >
                {typesName[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                onClick={() => setActiveSize(i)}
                key={i}
                className={activeSize === i ? "active" : ""}
              >
                {size} cm.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price}</div>
          <button
            onClick={productAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            <i>{pizzaCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
