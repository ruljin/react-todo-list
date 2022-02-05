import { useState } from 'react';
import { Header } from './components';
import { CreateTodo } from './containers';
import './app.css';

const App = () => {
	const [list, setList] = useState([]);

	const handleAddTodo = (todo) => setList([...list, todo]);

	return (
		<div className='page'>
			<Header text='React Todo List' />
			<CreateTodo handleAddTodo={handleAddTodo} />
		</div>
	);
};

export default App;
