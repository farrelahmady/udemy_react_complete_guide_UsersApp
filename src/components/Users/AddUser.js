import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import style from "./AddUser.module.css";

export const AddUser = () => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={style.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" name="username" />
				<label htmlFor="age">Age</label>
				<input type="text" id="age" name="age" />
				<Button type="submit">Add user</Button>
			</form>
		</Card>
	);
};
