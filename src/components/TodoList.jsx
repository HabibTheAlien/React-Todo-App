import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="todoContainer">
			<ul className="todoList">
				{filteredTodos.map((todo) => (
					<Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};
export default TodoList;
