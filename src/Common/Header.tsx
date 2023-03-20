import React, { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../Constants";
import { RootState, useAppDispatch } from "../Store";
import { useSelector } from "react-redux";
import { changeImageType, PokemonImageType } from "../Store/imageTypeSlice";

// interface Props {}

const Header = (): React.ReactElement => {
  const type = useSelector((state: RootState) => state.imageType.type);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeImageType({
        type: e.target.value as PokemonImageType,
      })
    );
  };

  return (
    <HeaderStyled>
      <TitleStyled>
        <Link to="/">Pokémon</Link>
      </TitleStyled>
      <SelectStyled value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>official</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
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
