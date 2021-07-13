import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TodoList = () => {
	const [tasks, setTasks] = useState(["new task"]);

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	let makeList = tasks.map((item, i) => {
		return (
			<li key={i}>
				{item}
				<button onClick={() => removeTask(i)}>X</button>
			</li>
		);
	});

	let newTask = event => {
		if (event.keyCode === 13) {
			let userInput = event.target.value;
			const newTaskList = [...tasks, userInput];
			setTasks(newTaskList);
			event.target.value = "";
		}
	};

	const removeTask = index => {
		const removeArr = tasks.filter((item, i) => i != index);
		setTasks(removeArr);
	};

	return (
		<div>
			<input
				type="text"
				id="fname"
				name="fname"
				placeholder="Add your task..."
				onKeyDown={newTask}
				ref={inputRef}
			/>
			<ul>{makeList}</ul>
			<p>{tasks.length} items left</p>
		</div>
	);
};

export default TodoList;
