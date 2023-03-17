import React from "react";
import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useNavigate } from "react-router-dom";

// interface Props {}
const TempImg =
  "https://mblogthumb-phinf.pstatic.net/20151020_232/mallteriyang_1445318621191pI5Fg_PNG/001_001.png?type=w2";

const PokeCardItem = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/이상해씨`);
  };

  return (
    <ItemSty onClick={handleClick}>
      <HeaderSty>
        <PokeNameChip />
      </HeaderSty>
      <BodySty>
        <ImageSty src={TempImg} />
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
  width: 250px;
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
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
`;

const ImageSty = styled.img`
  display: block;
  margin: 16px auto;
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

const FooterSty = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default PokeCardItem;
