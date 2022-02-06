import { Button } from '..';
import styles from './todo_list_item.module.css';

export const TodoListItem = ({ todo, handleRemoveTodo }) => (
	<li className={styles.item}>
		<div className={styles.container}>
			<span>{todo}</span>
			<div className={styles.actions}>
				<Button variant='positive' onClick={() => handleRemoveTodo(todo)}>
					Completed
				</Button>
				<Button variant='negative' onClick={() => handleRemoveTodo(todo)}>
					Remove
				</Button>
			</div>
		</div>
	</li>
);
