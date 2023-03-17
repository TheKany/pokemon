import React from "react";
import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";

// interface Props {}

const TempImg =
  "https://mblogthumb-phinf.pstatic.net/20151020_232/mallteriyang_1445318621191pI5Fg_PNG/001_001.png?type=w2";

const PokemonDetail = (): React.ReactElement => {
  return (
    <ContainerSty>
      <ImageContainerSty>
        <ImageSty src={TempImg} />
      </ImageContainerSty>
      <BodySty>
        <h2>기본 정보</h2>
        <TableSty>
          <TableHeadSty>번호</TableHeadSty>
          <TableBodySty>1</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>이름</TableHeadSty>
          <TableBodySty>이상해씨</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>타입</TableHeadSty>
          <TableBodySty>grass, poison</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>키</TableHeadSty>
          <TableBodySty>0.7 M</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>몸무게</TableHeadSty>
          <TableBodySty>6.9kg</TableBodySty>
        </TableSty>
      </BodySty>
      <BodySty>
        <h2>능력치</h2>
        <TableSty>
          <TableHeadSty>hp</TableHeadSty>
          <TableBodySty>45</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>attack</TableHeadSty>
          <TableBodySty>49</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>defense</TableHeadSty>
          <TableBodySty>49</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>special-attack</TableHeadSty>
          <TableBodySty>65</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>special-defense</TableHeadSty>
          <TableBodySty>65</TableBodySty>
        </TableSty>
        <TableSty>
          <TableHeadSty>speed</TableHeadSty>
          <TableBodySty>45</TableBodySty>
        </TableSty>
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
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
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
