import { Button } from '..';

export const TodoListItem = ({ todo, handleRemoveTodo }) => (
	<li>
		<span>{todo}</span>
		<Button variant='positive' onClick={() => handleRemoveTodo(todo)}>
			Completed
		</Button>
		<Button variant='negative' onClick={() => handleRemoveTodo(todo)}>
			Remove
		</Button>
	</li>
);
