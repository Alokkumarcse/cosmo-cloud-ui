import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const Header = styled.h1`
	text-transform: uppercase;
	font-size: 30px;
	text-align: center;
	padding: 10px;
	background-color: greenyellow;
	border-radius: 2px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Header>Nested data presenter</Header>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
