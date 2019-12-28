import React from "react";
import { useSelector } from "react-redux";
import CategoryMain from "./CategoryMain/CategoryMain";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import "./Category.scss";

function Category() {
  const productList = useSelector(state => state.productReducers.productList);

  return (
    <div className="category">
      <CategoryMain />

      <div className="container">
        <ul className="row category-products">
          {productList.map(item => (
            <CategoryProduct key={item.uuid} product={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
