import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
import s from "./search.module.scss";

export const Search: FC = () => {
  return (
    <label>
      <SearchIcon className={s.icon}  />
      <input className={s.search} placeholder="Search"></input>
    </label>
  );
};
