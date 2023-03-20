import styled from "@emotion/styled";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchPokemons } from "../Store/pokemonSlice";
import PokeCardItem from "./PokeCardItem";

const PokeCardList = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { pokemons } = useSelector((state: RootState) => state.pokemons);

  const [scrollRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== "",
    onLoadMore: async () => {
      dispatch(fetchPokemons(pokemons.next));
    },
    disabled: false,
    rootMargin: "0px 0px 600px 0px",
  });

  useEffect(() => {
    dispatch(fetchPokemons());
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
