import { FC, useState } from "react";

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickClear = () => {
    setSearchValue("");
  };

  return (
    <div className="search-block d-flex">
      <img src="/img/search.svg" alt="search" />
      { searchValue && <img
        onClick={handleClickClear}
        className="clear cu-p"
        src="/img/btn-remove.svg"
        alt="clear"
      />}
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search..."
        value={searchValue}
      />
    </div>
  );
};
