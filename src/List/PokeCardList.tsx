import styled from "@emotion/styled";
import PokeCardItem from "./PokeCardItem";

// interface Props {}

const PokeCardList = (): React.ReactElement => {
  return (
    <ListStyled>
      {Array.from({ length: 10 }).map((_, idx) => {
        return <PokeCardItem key={idx} />;
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
