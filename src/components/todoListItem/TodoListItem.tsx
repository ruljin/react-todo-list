import clsx from "clsx";
import { Button } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./todo_list_item.module.scss";

import type { Todo } from "../../models/Todo";

type TodoListItemProps = {
	todo: Todo;
	handleCompleteTodo: (id: string) => void;
	handleRemoveTodo: (id: string) => void;
};

export const TodoListItem = ({
	todo,
	handleCompleteTodo,
	handleRemoveTodo,
}: TodoListItemProps) => {
	const classes = clsx(styles.item, { [styles.done]: todo.status === "done" });

	return (
		<li className={classes}>
			<div className={styles.container}>
				<span className={styles.text}>{todo.todo}</span>
				<div className={styles.actions}>
					<Button
						variant="positive"
						disabled={todo.status === "done"}
						onClick={() => handleCompleteTodo(todo.id)}>
						<FontAwesomeIcon icon={faCheck} />
					</Button>
					<Button variant="negative" onClick={() => handleRemoveTodo(todo.id)}>
						<FontAwesomeIcon icon={faTrash} />
					</Button>
				</div>
			</div>
		</li>
	);
};
