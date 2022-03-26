import create from "zustand";
import { nanoid } from "nanoid";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TasksStore {
  tasks: Task[];
  filteredTasks: Task[];
  search: string;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setSearch: (search: string) => void;
}

export const useStore = create<TasksStore>((set) => ({
  tasks: [],
  search: "",
  filteredTasks: [],
  addTask: (title: string) =>
    set((state) => {
      if (!title) return { ...state };
      const arr = title.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      title = arr.join(" ");
      return {
        tasks: [...state.tasks, { id: nanoid(), title, completed: false }],
      };
    }),
  toggleTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  setSearch: (search: string) =>
    set((state) => ({
      search,
      filteredTasks: state.tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      ),
    })),
}));
