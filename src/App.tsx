import AddTask from "./components/AddTask";
import "./App.css";
import TaskMap from "./components/MapTask";
import Search from "./components/Search";
import { useStore } from "./store";
import { useEffect } from "react";

const App = () => {
  const { setSearch, tasks, search } = useStore();

  useEffect(() => {
    setSearch(search);
  }, [tasks]);

  return (
    <div className="md:w-[500px] w-72 mx-7 min-h-fit border-2 border-lime-400 p-7 rounded-xl text-white text-center">
      <h1>To Do List</h1>
      <Search />
      <AddTask />
      <TaskMap />
    </div>
  );
};

export default App;
