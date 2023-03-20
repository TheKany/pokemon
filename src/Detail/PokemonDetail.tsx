import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchPokemonsDetail } from "../Store/pokemonDetailSlice";

const PokemonDetail = () => {
  let { name } = useParams();
  const dispatch = useAppDispatch();

  const imagetype = useSelector((state: RootState) => state.imageType.type);
  const { pokemonsDetails } = useSelector(
    (state: RootState) => state.pokemonsDetail
  );
  const pokemon = name ? pokemonsDetails[name] : null;

  useEffect(() => {
    if (!name) return;

    dispatch(fetchPokemonsDetail(name));
  }, [name]);

  if (!name || !pokemon) {
    return null;
  }

  return (
    <ContainerSty>
      <ImageContainerSty>
        <ImageSty src={pokemon.images[imagetype]} />
      </ImageContainerSty>
      <BodySty>
        <h2>기본 정보</h2>
        <TableSty>
          <TableHeadSty>번호</TableHeadSty>
          <TableBodySty>{pokemon.id}</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>이름</TableHeadSty>
          <TableBodySty>{pokemon.korName}</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>타입</TableHeadSty>
          <TableBodySty>{pokemon.types.toString()}</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>키</TableHeadSty>
          <TableBodySty>{`${pokemon.height} m`}</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>몸무게</TableHeadSty>
          <TableBodySty>{`${pokemon.weight} kg`}</TableBodySty>
        </TableSty>
      </BodySty>
      <BodySty>
        <h2>능력치</h2>
        {pokemon.baseStats.map((stat, idx) => {
          return (
            <TableSty key={idx}>
              <TableHeadSty>{stat.name}</TableHeadSty>
              <TableBodySty>{stat.stat}</TableBodySty>
            </TableSty>
          );
        })}
      </BodySty>
      <FooterSty>
        <PokeMarkChip />
      </FooterSty>
    </ContainerSty>
  );
};

const ContainerSty = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 8px;
`;

const ImageContainerSty = styled.div`
  display: block;
  margin: 0 auto;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
  width: 600px;
`;

const ImageSty = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  object-fit: cover;
`;

const BodySty = styled.div`
  margin: 0 32px;
  border-top: 1px solid #c0c0c0;
`;

const TableSty = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #c0c0c0;
  align-items: center;
  font-size: 14px;
`;

const TableHeadSty = styled.div`
  width: 20%;
  margin-right: 10px;
  padding: 8px 0;
  color: #616161;
`;

const TableBodySty = styled.div`
  padding: 5px 0;
  font-weight: 500;
`;

const FooterSty = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px;
`;

export default PokemonDetail;
