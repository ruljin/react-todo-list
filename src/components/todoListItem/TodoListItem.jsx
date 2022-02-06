import { Button } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './todo_list_item.module.css';

export const TodoListItem = ({ todo, handleRemoveTodo }) => (
	<li className={styles.item}>
		<div className={styles.container}>
			<span>{todo}</span>
			<div className={styles.actions}>
				<Button variant='positive' onClick={() => handleRemoveTodo(todo)}>
					<FontAwesomeIcon icon={faCheck} />
				</Button>
				<Button variant='negative' onClick={() => handleRemoveTodo(todo)}>
					<FontAwesomeIcon icon={faTrash} />
				</Button>
			</div>
		</div>
	</li>
);
