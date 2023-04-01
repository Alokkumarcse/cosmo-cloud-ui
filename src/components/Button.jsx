import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin: 20px;
`;

const SaveButton = styled.button`
	font-size: 18px;
	padding: 7px 20px;
	cursor: pointer;
	background-color: lightblue;
	&:focus {
		outline: none;
	}
	border: none;
	&:hover {
		background-color: steelblue;
	}
`;

const Button = ({ database }) => {
	function showData() {
		console.log(database);
	}

	return (
		<Container>
			<SaveButton onClick={showData}>Save</SaveButton>
		</Container>
	);
};

export default Button;
