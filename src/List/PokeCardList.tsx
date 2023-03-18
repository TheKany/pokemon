import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { fetchPokemons, PokemonListInterface } from "../Service/pokemonService";
import PokeCardItem from "./PokeCardItem";

const PokeCardList = (): React.ReactElement => {
  const [pokemons, setPokemons] = useState<PokemonListInterface>({
    count: 0,
    next: "",
    results: [],
  });

  useEffect(() => {
    (async () => {
      const result = await fetchPokemons();
      setPokemons(result);
    })();
  }, []);

  return (
    <ListStyled>
      {pokemons.results.map((pokemon, idx) => {
        return (
          <PokeCardItem key={`${pokemon.name}_${idx}`} name={pokemon.name} />
        );
      })}
    </ListStyled>
  );
};

const ListStyled = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;
