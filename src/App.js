import React from "react";
import { AddUser } from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [users, setUsers] = React.useState([]);

	const addUserHandler = (name, age) => {
		setUsers((prevUsers) => {
			return [...prevUsers, { id: Math.random().toString(), name, age }];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={users} />
		</div>
	);
}

export default App;
