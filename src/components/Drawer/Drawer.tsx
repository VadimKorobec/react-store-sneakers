import { FC } from "react";

import { Button } from "../Button/Button";
import { Item } from "../../types/types";

interface DrawerProps {
  cartItems: Item[];
  onClickCard: () => void;
  onRemove: (id: string) => void;
}

export const Drawer: FC<DrawerProps> = ({
  cartItems,
  onClickCard,
  onRemove,
}) => {
  return (
    <div className="overlay">
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
        {cartItems.length > 0 ? (
          <div className="items " style={{ flex: "1" }}>
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="cartItem d-flex align- mb-20">
                <div
                  style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{cartItem.title}</p>
                  <b>{cartItem.price} $</b>
                </div>
                <img
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="remove"
                  onClick={() => onRemove(cartItem.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="cartEmpty d-flex aligh-center justify-center flex-column flex">
            <img
              className="mb-20"
              src="/img/empty-cart.jpg"
              alt="empty"
              width={120}
              height={120}
              style={{margin:'0 auto'}}
            />
            <h2>Cart empty</h2>
            <p className="opacity-6 " >Your cart is empty</p>
            <button className="greenButton" style={{margin:'0 auto'}}>
              <img src="/img/arrow.svg" alt="arrow" />
              Come back
            </button>
          </div>
        )}

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
