import { TodoListItem } from '../../components';

export const TodosList = ({ list, handleRemoveTodo }) => (
	<ul>
		{list.map((todo, index) => (
			<TodoListItem
				key={index}
				todo={todo}
				handleRemoveTodo={handleRemoveTodo}
			/>
		))}
	</ul>
);
