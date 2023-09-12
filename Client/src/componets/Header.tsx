import { Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
const StyledHeader = styled.div`
  margin: auto;
  border: 1px solid blue;
  max-width: fit-content;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Stack spacing={3}>
        <NavLink to="/">
          <Text fontSize="5xl">TJ TRAVEL</Text>
        </NavLink>
      </Stack>
    </StyledHeader>
  );
};
