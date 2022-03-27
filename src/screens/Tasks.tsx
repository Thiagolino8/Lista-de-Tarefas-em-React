import Search from "../components/Search";
import AddTask from "../components/AddTask";
import { useStore } from "../store";
import TaskRender from "../components/RenderTask";


const Tasks = () => {
	const { filteredTasks } = useStore();
  return (
    <>
      <h1>To Do List</h1>
      <Search />
      <AddTask />
      {filteredTasks.map((task) => (
        <TaskRender task={task} />
      ))}
    </>
  );
};

export default Tasks;
