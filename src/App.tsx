import { useState } from "react";
import { Header } from "./components";
import { CreateTodo, TodosList } from "./containers";
import { generateRandomID } from "./utils/generateRandomID";
import "./app.scss";

import type { Todo } from "./models/Todo";

export const App = () => {
	const [list, setList] = useState<Todo[]>([]);

	const handleAddTodo = (todo: string) => {
		const newTodo = { id: generateRandomID(), status: "in progress", todo };
		setList([...list, newTodo]);
	};

	const handleRemoveTodo = (id: string) =>
		setList([...list].filter((item) => item.id !== id));

	const handleCompleteTodo = (id: string) => {
		const newList = [...list].map((item) =>
			item.id === id ? { ...item, status: "done" } : item
		);
		setList(newList);
	};

	return (
		<div className="page">
			<Header text="React Todo List" />
			<CreateTodo handleAddTodo={handleAddTodo} />
			<TodosList
				list={list}
				handleCompleteTodo={handleCompleteTodo}
				handleRemoveTodo={handleRemoveTodo}
			/>
		</div>
	);
};
