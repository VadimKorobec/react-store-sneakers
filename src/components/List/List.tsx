import { FC } from "react";
import { CardItem } from "../CardItem/CardItem";
import { Item } from "../../types/types";

interface ListItemProps{
  items:Item[]
  addToCart:(obj:Item)=> void
}

export const List: FC<ListItemProps> = ({items,addToCart}) => {
  return (
    <>
    {items.map(item =>(
      <CardItem addToCart={addToCart} key={item.id} item={item} />
    ))}
      
    </>
  );
};
