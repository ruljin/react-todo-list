import { TodoListItem } from '../../components';
import styles from './todo_list.module.css';

export const TodosList = ({ list, handleRemoveTodo }) => (
	<ul className={styles.list}>
		{list.map((todo, index) => (
			<TodoListItem
				key={index}
				todo={todo}
				handleRemoveTodo={handleRemoveTodo}
			/>
		))}
	</ul>
);
