import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { fetchPokemons, PokemonListInterface } from "../Service/pokemonService";
import PokeCardItem from "./PokeCardItem";

const PokeCardList = (): React.ReactElement => {
  const [pokemons, setPokemons] = useState<PokemonListInterface>({
    count: 0,
    next: "",
    results: [],
  });

  const [scrollRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== "",
    onLoadMore: async () => {
      const newPokemons = await fetchPokemons(pokemons.next);

      setPokemons({
        ...newPokemons,
        results: [...pokemons.results, ...newPokemons.results],
      });
    },
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 600px 0px",
  });

  useEffect(() => {
    (async () => {
      const result = await fetchPokemons();
      setPokemons(result);
    })();
  }, []);

  return (
    <>
      <ListStyled>
        {pokemons.results.map((pokemon, idx) => {
          return (
            <PokeCardItem key={`${pokemon.name}_${idx}`} name={pokemon.name} />
          );
        })}
      </ListStyled>
      <div ref={scrollRef}>Loading</div>
    </>
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
