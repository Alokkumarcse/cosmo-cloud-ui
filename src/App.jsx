import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
	min-width: 700px;
	width: auto;
`;

import useTraverseTree from "./hooks/useTraverseTree";
import Task from "./components/Task";
import db from "./dataBase/data.js";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
	const [database, setDatabase] = useState(db);
	const { insertNode, deleteNode, updateNode } = useTraverseTree();

	// function for handle node insertion into database
	function handleInsertNode(id) {
		const newDatabase = insertNode(database, id);
		setDatabase(newDatabase);
	}

	// function for handle node deletion from database
	function handleDeleteNode(id) {
		const newDatabase = deleteNode(database, id);
		setDatabase(newDatabase);
	}

	// function for handle node updating
	function handleUpdateNode(id, inputText, inputType) {
		const newDatabase = updateNode(database, id, inputText, inputType);
		setDatabase(newDatabase);
	}

	// console.log("rendered");
	// console.log(database);

	return (
		<Container>
			<Navbar />
			<div className="app">
				<div className="task__container">
					<Task
						db={database}
						setDB={setDatabase}
						handleInsertNode={handleInsertNode}
						handleDeleteNode={handleDeleteNode}
						handleUpdateNode={handleUpdateNode}
					/>
				</div>
				<div className="button-container">
					<Button database={database}></Button>
				</div>
			</div>
		</Container>
	);
}

export default App;
