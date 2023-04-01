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
	function updateNode() {}

	return { insertNode, deleteNode };
};

export default useTraverseTree;
