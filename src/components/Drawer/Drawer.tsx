import { FC } from "react";

import { Button } from "../Button/Button";

type DrawerProps ={
  onClickCard:()=>void
}


export const Drawer: FC<DrawerProps> = ({onClickCard}) => {
  return (
    <div  className="overlay">
      <div className="drawer ">
        <h2 className="d-flex justify-between mb-30">
          Shopping cart
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
            onClick={onClickCard}

          />
        </h2>
        <div className="items " style={{ flex: "1" }}>
          <div className="cartItem d-flex align- mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
              <b>12 999 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 498 $</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 $</b>
            </li>
          </ul>
          <Button />
        </div>
      </div>
    </div>
  );
};
