import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import {
  fetchPokemonsDetail,
  PokemonDetailInterface,
} from "../Service/pokemonService";

interface PokeCardProps {
  name: string;
}

const PokeCardItem = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailInterface | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonsDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name]);

  if (!pokemon) {
    return null;
  }

  return (
    <ItemSty onClick={handleClick} color={pokemon.color}>
      <HeaderSty>
        <PokeNameChip
          name={pokemon.korName}
          id={pokemon.id}
          color={pokemon.color}
        />
      </HeaderSty>
      <BodySty>
        <ImageSty src={pokemon.images.dreamWorld} alt={pokemon.name} />
      </BodySty>
      <FooterSty>
        <PokeMarkChip />
      </FooterSty>
    </ItemSty>
  );
};

const ItemSty = styled.li`
  display: block;
  flex-direction: column;
  padding: 8px;
  width: 200px;
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeaderSty = styled.div`
  display: flex;
  margin: 8px 0;
`;

const BodySty = styled.div`
  display: block;
  margin: 0 auto;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
  width: 150px;
  height: 200px;
`;

const ImageSty = styled.img`
  display: block;
  margin: 16px auto;
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const FooterSty = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default PokeCardItem;
