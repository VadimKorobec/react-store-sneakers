import {FC} from 'react'

type HeaderProps ={
  onClickCard: () => void
}

export const Header:FC<HeaderProps> = ({onClickCard}) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h2 className="text-uppercase">React Sneakers</h2>
          <p className="opacity-5">Store for the best sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={onClickCard} className="mr-30 cu-p">
          <img  src="/img/cart.svg" alt="cart" width={18} height={18} />
          <span>1205 $</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="user" width={18} height={19} />
        </li>
      </ul>
    </header>
  );
};
