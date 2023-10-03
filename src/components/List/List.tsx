import { FC } from "react";
import { CardItem } from "../CardItem/CardItem";
import { Item } from "../../types/types";

interface ListItemProps{
  items:Item[]
}

export const List: FC<ListItemProps> = ({items}) => {
  return (
    <>
    {items.map(item =>(
      <CardItem key={item.id} item={item} />
    ))}
      
    </>
  );
};
