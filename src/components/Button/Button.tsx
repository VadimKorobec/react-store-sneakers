import {FC} from 'react'

import styles from './Button.module.scss'



export const Button:FC = () => {
  return (
    <>
      <button  className={styles.greenButton}>
        Make an order <img src="/img/arrow.svg" alt="arrow" />
      </button>
    </>
  );
};
