import { useState } from "react";
import "./App.css";

import useTraverseTree from "./hooks/useTraverseTree";
import Task from "./components/Task";
import db from "./dataBase/data.js";

function App() {
	const [database, setDatabase] = useState(db);
	const { insertNode, deleteNode } = useTraverseTree();

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

	return (
		<div className="app">
			<div className="task__container">
				<Task
					db={database}
					handleInsertNode={handleInsertNode}
					handleDeleteNode={handleDeleteNode}
				/>
				
			</div>
		</div>
	);
}

export default App;
