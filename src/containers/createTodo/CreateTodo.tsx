import { useState } from "react";
import { Input, Button } from "../../components";
import styles from "./create_todo.module.scss";

import type { ChangeEvent } from "react";

type CreateTodoProps = {
	handleAddTodo: (todo: string) => void;
};

export const CreateTodo = ({ handleAddTodo }: CreateTodoProps) => {
	const [value, setValue] = useState("");

	const handleCreateClick = () => {
		if (!value.length) {
			return;
		}

		handleAddTodo(value);
		setValue("");
	};

	return (
		<div className={styles.todo__container}>
			<Input
				value={value}
				placeholder="What do you have to do..."
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
			/>
			<div className={styles.todo__actions}>
				<Button
					variant="positive"
					onClick={handleCreateClick}
					disabled={!value.length}>
					Create
				</Button>
				<Button variant="negative" onClick={() => setValue("")}>
					Clear
				</Button>
			</div>
		</div>
	);
};
