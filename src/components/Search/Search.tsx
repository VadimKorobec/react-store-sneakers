import {FC} from 'react'

export const Search:FC = () => {
  return (
    <div className="search-block d-flex">
      <img src="/img/search.svg" alt="search" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};
