import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: fit-content;
`;

const Box = styled.div`
	position: relative;
	height: 16px;
	width: 30px;
	border: none;
	outline: none;
	border-radius: 10px;
	background-color: ${(props) => (props.toggle ? "tomato" : "grey")};
	cursor: pointer;
`;

const Switch = styled.div`
	position: absolute;
	top: 2px;
	left: ${(props) => (props.toggle ? "14px" : 0)};
	height: 12px;
	width: 12px;
	border-radius: 50%;
	background-color: #fff;
	margin: 0 2px;
`;

const ToggleButton = () => {
	const [toggle, setToggle] = useState(false);
	function handleClick(e) {
		e.stopPropagation();
		setToggle(!toggle);
	}
	return (
		<Wrapper>
			<Box onClick={handleClick} toggle={toggle}>
				<Switch toggle={toggle}></Switch>
			</Box>
		</Wrapper>
	);
};

export default ToggleButton;
