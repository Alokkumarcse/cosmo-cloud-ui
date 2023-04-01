const db = {
	id: 1,
	name: "field and type",
	isRequired: true,
	type: "object",
	items: [
		{
			id: 2,
			name: "person",
			type: "object",
			isRequired: true,
			items: [
				{
					id: 3,
					name: "name",
					type: "object",
					isRequired: true,
					items: [
						{
							id: 21,
							name: "first name",
							type: "string",
							isRequired: false,
						},
						{
							id: 22,
							name: "last name",
							type: "string",
							isRequired: false,
						},
					],
				},
				{
					id: 4,
					name: "age",
					type: "integer",
					isRequired: false,
				},
			],
		},
		{
			id: 6,
			name: "order",
			type: "integer",
			isRequired: false,
		},
		{
			id: 7,
			name: "class",
			type: "string",
			isRequired: false,
		},
	],
};

export default db;
