import { FC, useState } from "react";
import styles from "./CardItem.module.scss";
import { Item } from "../../types/types";

interface CardItemProps{
  item:Item
}

export const CardItem: FC<CardItemProps> = ({item}) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isFavorite,setIsFavorite] = useState<boolean>(false)
  
  const handleClickAdd = () => {
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
      <img src={item.imageUrl} alt="sneakers" width={133} height={112} />
      <h5>{item.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{item.price} $</b>
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
