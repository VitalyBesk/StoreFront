import React from "react";
import "./CategoryMain.scss";

function CategoryMain() {
  return (
    <main className="category-main d-flex">
      <div className="container h-inherit">
        <div className="row center-xs h100">
          <div className="col-xs-8 h100">
            <div className="category-main__intro d-flex flex-column middle-xs- center-xs h100">
              <h1 className="category-main__heading">
                <span>Plates</span>
              </h1>
              <p className="category-main__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at purus pulvinar, placerat turpis ac, interdum metus. In eget
                massa sed enim hendrerit auctor a eget arcu. Curabitur ac
                pharetra nisl, sit amet mattis dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CategoryMain;
