import { TodoListItem } from "../../components";
import styles from "./todo_list.module.scss";

import type { Todo } from "../../models/Todo";

type TodoListProps = {
	list: Todo[];
	handleCompleteTodo: (id: string) => void;
	handleRemoveTodo: (id: string) => void;
};

export const TodosList = ({
	list,
	handleCompleteTodo,
	handleRemoveTodo,
}: TodoListProps) => (
	<ul className={styles.todo__list}>
		{list.map((todo) => (
			<TodoListItem
				key={todo.id}
				todo={todo}
				handleCompleteTodo={handleCompleteTodo}
				handleRemoveTodo={handleRemoveTodo}
			/>
		))}
	</ul>
);
