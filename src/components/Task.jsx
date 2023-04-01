import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import styled from "styled-components";

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: lightblue;
	padding: 5px 10px 5px 5px;
	border-radius: 3px;
	margin: 0 20px 20px 20px;
	font-size: 18px;
	font-weight: 500;
	&:hover {
		background-color: lightgrey;
	}
`;

const Container = styled.div`
	display: flex;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 30px;
	margin-top: 7px;
`;

const Input = styled.input`
	padding: 3px 0 3px 5px;
	font-size: 16px;
`;

const Select = styled.select`
	cursor: pointer;
	padding: 3px 0 3px 5px;
	font-size: 16px;
`;

const InputContainer = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`;

const ButtonContainer = styled.div`
	flex: 1;
`;

const Buttons = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Span = styled.span`
	cursor: pointer;
	font-weight: 400;
`;

const Task = ({ db, handleInsertNode, handleDeleteNode }) => {
	const [inputValue, setInputValue] = useState(db.name);
	const [inputType, setInputType] = useState(db.type);
	const [show, setShow] = useState(false);

	// Method for handle the add Data
	function handleAddData() {
		console.log("invoked add method", db.id);
		handleInsertNode(db.id);
	}

	// Method for handle the remove Data
	function handleDeleteData() {
		console.log("invoked delete method", db.id);
		handleDeleteNode(db.id);
	}

	// Method for handle update Data
	function handleUpdateData(e) {
		console.log("update method");
		console.log(inputValue, inputType);
	}

	// tree ui of data list
	if (db.type === "object") {
		return (
			<div style={{ marginLeft: db.id === 1 ? 0 : 20 }}>
				{db.id === 1 ? (
					<Header>
						<span>Field value and type</span>
						<Span onClick={() => handleAddData()}>
							<i className="bi bi-plus-circle"></i>
						</Span>
					</Header>
				) : (
					<Container>
						<Wrapper>
							<InputContainer>
								<Input
									type="text"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onFocus={(e) => setInputValue(e.target.value)}
									onBlur={() => handleUpdateData()}
								/>
								<Select
									value={inputType}
									onChange={(e) => setInputType(e.target.value)}
									onFocus={(e) => setInputType(e.target.value)}
									onBlur={() => handleUpdateData()}
								>
									<option>object</option>
									<option>string</option>
									<option>boolean</option>
									<option>integer</option>
								</Select>
							</InputContainer>
							<ButtonContainer>
								<Buttons>
									<span>Required</span>
									<ToggleButton />
									<Span onClick={() => handleAddData()}>
										<i className="bi bi-plus-circle"></i>
									</Span>
									<Span onClick={() => handleDeleteData()}>
										<i className="bi bi-trash3"></i>
									</Span>
								</Buttons>
							</ButtonContainer>
						</Wrapper>
					</Container>
				)}
				{/* Recursive rendering Task component to show all nested filed */}
				{db.items.map((filed) => {
					return (
						<Task
							key={filed.id}
							db={filed}
							handleInsertNode={handleInsertNode}
							handleDeleteNode={handleDeleteNode}
						/>
					);
				})}
			</div>
		);
	} else {
		return (
			<Wrapper style={{ marginLeft: 20 }} show={show} setShow={setShow}>
				<InputContainer>
					<Input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onFocus={(e) => setInputValue(e.target.value)}
						onBlur={() => handleUpdateData()}
					/>
					<Select
						value={inputType}
						onChange={(e) => setInputType(e.target.value)}
						onFocus={(e) => setInputType(e.target.value)}
						onBlur={() => handleUpdateData()}
					>
						<option>object</option>
						<option>string</option>
						<option>boolean</option>
						<option>integer</option>
					</Select>
				</InputContainer>
				<ButtonContainer show={show}>
					<Buttons>
						<span>Required</span>
						<ToggleButton />
						<Span onClick={() => handleDeleteData()}>
							<i className="bi bi-trash3"></i>
						</Span>
					</Buttons>
				</ButtonContainer>
			</Wrapper>
		);
	}
};

export default Task;
