import { CgClose, CgInfo } from "react-icons/cg";
import { useStore } from "../store";
import { Task } from "../store";

interface Props {
  task: Task;
}

const TaskRender = ({ task }: Props) => {
  const { deleteTask, toggleTask } = useStore();
  const handleInfoClick = (task: string) => {};
  return (
    <div
      className={`${
        task.completed ? "border-l-8 border-solid border border-lime-400" : ""
      } bg-zinc-700  px-3 py-2 my-3 flex rounded-md justify-between items-center`}
      onClick={() => toggleTask(task.id)}
    >
      <div className="text-xl font-bold mr-3 w-[80%] pointer truncate text-left">
        <p>{task.title}</p>
      </div>
      <div className="flex items-end">
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          <CgClose />
        </button>
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={(e) => {
            e.stopPropagation();
            handleInfoClick(task.title);
          }}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default TaskRender;
