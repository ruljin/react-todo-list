import { useState } from 'react';
import { Header } from './components';
import { CreateTodo, TodosList } from './containers';
import './app.css';

const App = () => {
	const [list, setList] = useState([]);

	const handleAddTodo = (todo) => setList([...list, todo]);

	const handleRemoveTodo = (todo) =>
		setList([...list].filter((item) => item !== todo));

	return (
		<div className='page'>
			<Header text='React Todo List' />
			<CreateTodo handleAddTodo={handleAddTodo} />
			<TodosList list={list} handleRemoveTodo={handleRemoveTodo} />
		</div>
	);
};

export default App;
