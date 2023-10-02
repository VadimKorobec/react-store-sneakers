import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Drawer } from "../Drawer/Drawer";
import { List } from "../List/List";
import { useState } from "react";





export const App = () => {
  const [cartOpened,setCartOpened] = useState<boolean>(false)

  const handleCardClick =()=>{
    setCartOpened(!cartOpened)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClickCard={handleCardClick} />}
      <Header onClickCard = {handleCardClick} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <Search />
        </div>
        <div className="d-flex">
          <List  />
        </div>
      </div>
    </div>
  );
};
