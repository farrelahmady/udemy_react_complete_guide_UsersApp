import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import style from "./AddUser.module.css";
import { useState } from "react";

export const AddUser = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();

		//* Validation
		if (username.trim().length === 0 || age.trim().length === 0) {
			console.log("Please fill in all fields");
			return;
		}
		if (+age < 1) {
			console.log("Age must be a positive number");
			return;
		}

		props.onAddUser(username, age);

		//* Reset form
		setUsername("");
		setAge("");
	};

	const changeUsernameHandler = (event) => {
		//* Set the value of the username input to the value of the input
		setUsername(event.target.value);
	};

	const changeAgeHandler = (event) => {
		//* Set the value of the age input to the value of the input
		setAge(event.target.value);
	};

	return (
		<Card className={style.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={changeUsernameHandler}
				/>
				<label htmlFor="age">Age</label>
				<input
					type="number"
					id="age"
					name="age"
					value={age}
					onChange={changeAgeHandler}
				/>
				<Button type="submit">Add user</Button>
			</form>
		</Card>
	);
};
