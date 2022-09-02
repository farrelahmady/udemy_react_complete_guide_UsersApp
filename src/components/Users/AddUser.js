import React from "react";

export const AddUser = () => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" name="username" />
			<label htmlFor="age">Age</label>
			<input type="text" id="age" name="age" />
			<button type="submit">Add user</button>
		</form>
	);
};
