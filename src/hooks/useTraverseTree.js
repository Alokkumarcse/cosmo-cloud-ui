const useTraverseTree = () => {
	//insertNode into db tree
	function insertNode(database, id) {
		if (database.id === id && database.type === "object") {
			const newItems = [
				...database.items,
				{
					id: new Date().getTime(),
					name: "New field",
					type: "string",
					isRequired: false,
				},
			];
			const newDatabase = {
				...database,
				items: newItems,
			};
			return newDatabase;
		}
		// console.log(database, database.items);
		let latestDatabase = [];
		latestDatabase = database.items.map((item) => {
			if (item.type === "object") {
				return insertNode(item, id);
			} else {
				return item;
			}
		});
		return { ...database, items: latestDatabase };
	}

	//delete from db tree
	function deleteNode(database, id) {
		if (database.type === "object") {
			console.log(id);
			const newItems = database.items.filter((item) => item.id !== id);
			if (newItems.length !== database.items.length) {
				return { ...database, items: newItems };
			} else {
				let latestDatabase = [];
				latestDatabase = database.items.map((item) => {
					if (item.type === "object") {
						return deleteNode(item, id);
					} else {
						return item;
					}
				});
				return { ...database, items: latestDatabase };
			}
		}
		return database;
	}

	//update into db tree
	function updateNode(database, id, inputText, inputType) {
		// console.log("update in tree");
		if (database.type === "object") {
			let index = database.items.findIndex((item) => item.id === id);
			if (index !== -1) {
				// data found at this level
				let task = database.items.find((item) => item.id === id);
				let newItems = database.items.filter((item) => item.id !== id);
				if (inputType === "object") {
					newItems.splice(index, 0, {
						...task,
						name: inputText,
						type: inputType,
						items: [],
					});
				} else {
					delete task.items;
					newItems.splice(index, 0, {
						...task,
						name: inputText,
						type: inputType,
					});
				}
				return { ...database, items: newItems };
			} else {
				// go deeper level of tree
				let latestDatabase = [];
				latestDatabase = database.items.map((item) => {
					return updateNode(item, id, inputText, inputType);
				});
				return { ...database, items: latestDatabase };
			}
		} else {
			// console.log("I am form tree type non object ");
			// console.log(database);
			return database;
		}
	}

	return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
