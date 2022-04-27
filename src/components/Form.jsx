const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		if (inputText === "") {
			alert("Please Enter some task");
		} else {
			setTodos([
				...todos,
				{ text: inputText, completed: false, id: Math.random() * 1000 },
			]);
			setInputText("");
		}
	};
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<form>
			<input
				placeholder="Add task"
				value={inputText}
				onChange={inputTextHandler}
				type="text"
			/>
			<button onClick={submitTodoHandler} type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={statusHandler} className="filterTodo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};
export default Form;
