import { Header } from './components';
import { CreateTodo } from './containers';
import './app.css';

const App = () => (
	<div className='page'>
		<Header text='React Todo List' />
		<CreateTodo />
	</div>
);

export default App;
