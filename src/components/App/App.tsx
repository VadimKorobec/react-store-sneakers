import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Drawer } from "../Drawer/Drawer";
import { List } from "../List/List";
import { Item } from "../../types/types";

export const App = () => {
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  
  

  useEffect(() => {
    const fetchItems = async()=>{
      try {
        const response = await axios.get<Item[]>('https://651adfbd340309952f0df995.mockapi.io/items')
        setItems(response.data) 
      } catch (error) {
        alert(error)
      }
    }
   fetchItems()
  }, []);

  const handleCardClick = () => {
    setCartOpened(!cartOpened);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClickCard={handleCardClick} />}
      <Header onClickCard={handleCardClick} />
      <div className="content  p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <Search />
        </div>
        <div className="d-flex flex-wrap">
          <List items={items}/>
        </div>
      </div>
    </div>
  );
};
