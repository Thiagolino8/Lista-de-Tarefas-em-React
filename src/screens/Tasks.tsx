import Search from "../components/Search";
import AddTask from "../components/AddTask";
import { useStore } from "../store";
import TaskRender from "../components/RenderTask";
import { useEffect } from "react";

const Tasks = () => {
  const { filteredTasks } = useStore();
  return (
    <>
      <h1>To Do List</h1>
      <Search />
      <AddTask />
      {filteredTasks().map((task) => {
        console.log(task);
        return <TaskRender task={task} />;
      })}
    </>
  );
};

export default Tasks;
