import create from "zustand";
import { nanoid } from "nanoid";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  search: string;
  filteredTasks: () => Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setSearch: (search: string) => void;
  updateTask: (id: string, title: string) => void;
  getTaskByTitle: (title: string) => Task;
  getTaskById: (id: string) => Task;
  taskAlreadyExists: (title: string) => boolean;
  formatTaskTitle: (title: string) => string;
}

export const useStore = create<TaskStore>((set, get) => ({
  tasks: [],

  search: "",

  filteredTasks: () =>
    (get().tasks).filter((task) =>
      task.title.toLowerCase().includes((get().search).toLowerCase())
    ),

  addTask: (title: string) =>
    set((state) => {
      if (!title) return { ...state };
      title = get().formatTaskTitle(title);
      if (get().taskAlreadyExists(title)) return { ...state };
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
    set(() => ({
      search,
    })),

  updateTask: (id: string, title: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title: get().formatTaskTitle(title) } : task
      ),
    })),

  getTaskByTitle: (title: string) =>
    get().tasks.find((task) => task.title === title),

  taskAlreadyExists: (title: string) => {
    if (
      get()
        .tasks.map(
          (task) =>
            get().formatTaskTitle(task.title) === get().formatTaskTitle(title)
        )
        .includes(true)
    ) {
      alert("Task already exists");
      return true;
    }
    return false;
  },

  formatTaskTitle: (title: string) => {
    const arr = title.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  },

  getTaskById: (id: string) => get().tasks.find((task) => task.id === id),
}));
