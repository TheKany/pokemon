import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// interface Props {}

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <TitleStyled>
        <Link to="/">Pokémon</Link>
      </TitleStyled>
      <SelectStyled>
        <option value="official">official</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </SelectStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`;

const TitleStyled = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #ffca09;
  text-shadow: -1px 0 blue, 0 2px blue, 1px 0 blue, -1px 0 blue;
`;

const SelectStyled = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`;

export default Header;
