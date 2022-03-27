import "./App.css";
import { useStore } from "./store";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "./screens/Tasks";
import Details from "./screens/Details";

const App = () => {
  const { setSearch, tasks, search } = useStore();

  useEffect(() => {
    setSearch(search);
  }, [tasks]);

  return (
    <div className="md:w-[500px] w-72 mx-7 min-h-fit border-2 border-lime-400 p-7 rounded-xl text-white text-center font-sans">
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/details/:title" element={<Details />} />
          <Route
            path="*"
            element={
              <main className="p-4">
                <h1>There's nothing here!</h1>
              </main>
            }
          />
        </Routes>
    </div>
  );
};

export default App;
