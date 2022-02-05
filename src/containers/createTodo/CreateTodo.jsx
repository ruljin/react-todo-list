import { useState } from 'react';
import { Input, Button } from '../../components';
import styles from './create_todo.module.css';

export const CreateTodo = ({ handleAddTodo }) => {
	const [value, setValue] = useState('');

	const handleCreateClick = () => {
		if (!value.length) {
			return;
		}

		handleAddTodo(value);
		setValue('');
	};

	return (
		<div className={styles.container}>
			<Input value={value} onChange={(e) => setValue(e.target.value)} />
			<div className={styles.actions}>
				<Button variant='positive' onClick={handleCreateClick}>
					Create
				</Button>
				<Button variant='negative' onClick={() => setValue('')}>
					Clear
				</Button>
			</div>
		</div>
	);
};
