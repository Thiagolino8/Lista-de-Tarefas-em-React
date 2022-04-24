import { useEffect } from "react";
import { useStore } from "../store";
import Input from "./Input";

const Search = () => {
  const { search, setSearch } = useStore();
  useEffect(() => {
    setSearch("");
    }, []);
  return (
    <div>
      <h2>Search</h2>
      <Input type='text' value={search} setValue={setSearch}/>
    </div>
  );
};

export default Search;
