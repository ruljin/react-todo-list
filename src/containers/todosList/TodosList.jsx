import { TodoListItem } from '../../components';
import styles from './todo_list.module.css';

export const TodosList = ({ list, handleCompleteTodo, handleRemoveTodo }) => (
	<ul className={styles.list}>
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
