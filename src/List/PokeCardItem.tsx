import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import { useIntersectionObserver } from "react-intersection-observer-hook";

import { RootState, useAppDispatch } from "../Store";
import { useSelector } from "react-redux";

import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { fetchPokemonsDetail } from "../Store/pokemonDetailSlice";
interface PokeCardProps {
  name: string;
}

const PokeCardItem = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imagetype = useSelector((state: RootState) => state.imageType.type);
  const { pokemonsDetails } = useSelector(
    (state: RootState) => state.pokemonsDetail
  );
  const pokemon = pokemonsDetails[props.name];

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    dispatch(fetchPokemonsDetail(props.name));
  }, [dispatch, props.name, isVisible]);

  if (!pokemon) {
    return (
      <ItemSty onClick={handleClick} color={"#fff"} ref={ref}>
        <HeaderSty>
          <PokeNameChip name={"포켓몬"} id={0} color={"#ffca09"} />
        </HeaderSty>
        <LoadingBodySty>?</LoadingBodySty>
        <FooterSty>
          <PokeMarkChip />
        </FooterSty>
      </ItemSty>
    );
  }

  return (
    <ItemSty onClick={handleClick} color={pokemon.color} ref={ref}>
      <HeaderSty>
        <PokeNameChip
          name={pokemon.korName}
          id={pokemon.id}
          color={pokemon.color}
        />
      </HeaderSty>
      <BodySty>
        <ImageSty src={pokemon.images[imagetype]} alt={pokemon.name} />
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

const LoadingBodySty = styled.div`
  display: flex;
  justify-content: center;
  color: #ffca09;
  font-size: 40px;
  font-weight: 900;
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
