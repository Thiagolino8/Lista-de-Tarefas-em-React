import create from 'zustand';
import { nanoid } from 'nanoid';

interface Task {
	id: string;
	title: string;
	completed: boolean;
}

interface TasksStore {
	tasks: Task[];
	addTask: (title: string) => void;
	toggleTask: (id: string) => void;
	deleteTask: (id: string) => void;
}

export const useStore = create<TasksStore>((set) => ({
	tasks: [],
	addTask: (title: string) =>
		set((state) => ({
			tasks: [...state.tasks, { id: nanoid(), title, completed: false }],
    })),
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
}));
