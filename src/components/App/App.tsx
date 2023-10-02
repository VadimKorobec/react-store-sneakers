import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Drawer } from "../Drawer/Drawer";
import { List } from "../List/List";





export const App = () => {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
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
