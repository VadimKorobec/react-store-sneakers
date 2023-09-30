import {FC} from 'react'

export const Button:FC = () => {
  return (
    <>
      <button className="greenButton">
        Make an order <img src="/img/arrow.svg" alt="arrow" />{" "}
      </button>
    </>
  );
};
