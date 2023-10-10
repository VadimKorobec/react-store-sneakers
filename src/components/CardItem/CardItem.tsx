import { FC, useState } from "react";
import {CartItem, Item} from "../../types/types";

import styles from "./CardItem.module.scss";

interface CardItemProps{
  item:Item
  addToCart:(obj:CartItem)=>void
}

export const CardItem: FC<CardItemProps> = ({item:{id,title,price,imageUrl},addToCart}) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isFavorite,setIsFavorite] = useState<boolean>(false)
  
  const handleClickAdd = () => {
    addToCart({id,title,price,imageUrl})
    setIsAdded(!isAdded);
  };

  const handleFaviriteAdd =()=>{
    setIsFavorite(!isFavorite)
  } 

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={handleFaviriteAdd} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="unlike" />
      </div>
      <img src={imageUrl} alt="sneakers" width={133} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <img
          style={{ cursor: "pointer" }}
          onClick={handleClickAdd}
          src={isAdded ? 'img/btn-checked.svg':'/img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
};
