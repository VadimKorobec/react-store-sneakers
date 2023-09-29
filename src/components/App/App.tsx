export const App = () => {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer ">
          <h2 className="d-flex justify-between mb-30">Shopping cart <img
                className="removeBtn cu-p"
                src="/img/btn-remove.svg"
                alt="remove"
              /> </h2>
          <div className="items " style={{ flex: "1" }}>
            <div className="cartItem d-flex align- mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                <b>12 999 $</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
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
          <button className="greenButton">Make an order <img src="/img/arrow.svg" alt="arrow" /> </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h2 className="text-uppercase">React Sneakers</h2>
            <p className="opacity-5">Store for the best sneakers</p>
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
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unlike" />
            </div>
            <img
              src="/img/sneakers/1.jpg"
              alt="sneakers"
              width={133}
              height={112}
            />
            <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>12 999 $</b>
              </div>
              <button className="button">
                <img
                  src="/img/btn-plus.svg"
                  alt="plus"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
