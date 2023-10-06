import { Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
const StyledHeader = styled.div`
  margin: auto;
  max-width: fit-content;
  margin-top: 30px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Stack spacing={3}>
        <NavLink to="/">
          <Text fontSize="6xl" style={{ fontFamily: "Cinzel" }}>
            THE <span style={{ fontFamily: "Oooh Baby" }}>TJ</span> ABROAD
          </Text>
        </NavLink>
      </Stack>
    </StyledHeader>
  );
};
