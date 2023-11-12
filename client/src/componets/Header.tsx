import { Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
const StyledHeader = styled.div`
  margin: auto;
  max-width: fit-content;
  margin-top: 40px;
  color: #a3968d;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Stack spacing={3}>
        <NavLink to="/">
          <Text fontSize="6xl" style={{ fontFamily: "Cinzel", textAlign: "center" }}>
            THE{" "}
            <span style={{ fontFamily: "Oooh Baby", fontSize: "90px" }}>
              TJ
            </span>{" "}
            ABROAD
          </Text>
        </NavLink>
      </Stack>
    </StyledHeader>
  );
};
