import {FC} from 'react'

export const CardItem:FC = () => {
  return (
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
  );
};
