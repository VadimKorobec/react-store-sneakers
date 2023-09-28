export const App = () => {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h2 className="text-uppercase">React Sneakers</h2>
            <p>Store for the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="cart" width={18} height={18} />
            <span>1205 $</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="user" width={18} height={19} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>All sneakers</h1>
        <div className="card">
          <img
            src="/img/sneakers/1.jpg"
            alt="sneakers"
            width={133}
            height={112}
          />
          <p>Men's Nike Blazer Mid Suede Sneakers</p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-colum">
              <span>Price:</span>
              <b>12 999 $</b>
            </div>
            <button className="button">
              <img src="/img/btn-plus.svg" alt="plus" width={11} height={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
