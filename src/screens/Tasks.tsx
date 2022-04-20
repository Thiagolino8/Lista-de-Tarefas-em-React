import Search from "../components/Search";
import AddTask from "../components/AddTask";
import { useStore } from "../store";
import RenderTask from "../components/RenderTask";

const Tasks = () => {
  const { filteredTasks } = useStore();
  return (
    <>
      <h1>To Do List</h1>
      <Search />
      <AddTask />
      {filteredTasks().map((task) => {
        return <RenderTask task={task} key={task.id}/>;
      })}
    </>
  );
};

export default Tasks;
