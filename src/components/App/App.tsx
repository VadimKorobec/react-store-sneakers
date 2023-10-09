import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../Header/Header";
import { Drawer } from "../Drawer/Drawer";
import { Item } from "../../types/types";
import { CardItem } from "../CardItem/CardItem";

export const App = () => {
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<Item[]>(
          "https://651adfbd340309952f0df995.mockapi.io/items"
        );
        setItems(response.data);
      } catch (error) {
        alert(error);
      }
    };

    const fetchItemsCart = async () => {
      try {
        const response = await axios.get<Item[]>(
          "https://651adfbd340309952f0df995.mockapi.io/cart"
        );
        setCartItems(response.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchItems();
    fetchItemsCart();
  }, []);

  const handleCardClick = () => {
    setCartOpened(!cartOpened);
  };

  const handleAddToCart = (obj: Item) => {
    axios.post("https://651adfbd340309952f0df995.mockapi.io/cart", obj);

    setCartItems((prev) => [...prev, obj]);
  };

  const handleRemoveItem = (id:string) => {
    axios.delete(`https://651adfbd340309952f0df995.mockapi.io/cart/${id}`);
     setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickClear = () => {
    setSearchValue("");
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer cartItems={cartItems} onClickCard={handleCardClick} onRemove={handleRemoveItem} />
      )}
      <Header onClickCard={handleCardClick} />
      <div className="content  p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={handleClickClear}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search..."
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <CardItem addToCart={handleAddToCart} key={item.id} item={item} />
            ))}{" "}
        </div>
      </div>
    </div>
  );
};
