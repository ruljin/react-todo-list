import { useState } from 'react';
import { Header } from './components';
import { CreateTodo, TodosList } from './containers';
import { generateRandomID } from './utils/generateRandomID';
import './app.css';

const App = () => {
	const [list, setList] = useState([]);

	const handleAddTodo = (todo) => {
		const newTodo = { id: generateRandomID(), status: 'in progress', todo };
		setList([...list, newTodo]);
	};

	const handleRemoveTodo = (id) =>
		setList([...list].filter((item) => item.id !== id));

	const handleCompleteTodo = (id) => {
		const newList = [...list].map((item) =>
			item.id === id ? { ...item, status: 'done' } : item
		);
		setList(newList);
	};

	return (
		<div className='page'>
			<Header text='React Todo List' />
			<CreateTodo handleAddTodo={handleAddTodo} />
			<TodosList
				list={list}
				handleCompleteTodo={handleCompleteTodo}
				handleRemoveTodo={handleRemoveTodo}
			/>
		</div>
	);
};

export default App;
