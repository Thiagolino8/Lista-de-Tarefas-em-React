import {  useNavigate } from "react-router-dom";
import { CgCheckO, CgClose, CgInfo, CgTrash } from "react-icons/cg";
import {AiOutlineCheck } from "react-icons/ai";
import { useStore } from "../store";
import type { Task }  from "../store";

interface Props {
  task: Task;
}

const TaskRender = ({ task }: Props) => {
  const navigate = useNavigate()
  const { deleteTask, toggleTask } = useStore();
  return (
    <div
      className={`${
        task.completed ? "border-l-8 border-solid border border-lime-400" : ""
      } bg-zinc-700  px-3 py-2 my-3 flex rounded-md justify-between items-center`}
      onClick={() => toggleTask(task.id)}
    >
      <div className="text-xl font-semibold mr-3 w-[80%] pointer truncate text-left">
        <p>{task.title}</p>
      </div>
      <div className="flex items-end">
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          <AiOutlineCheck />
        </button>
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          <CgClose />
        </button>
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          <CgTrash />
        </button>
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            navigate(`/details/${task.title}`);
          }}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default TaskRender;
