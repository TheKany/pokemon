import React from "react";
import styled from "@emotion/styled";

// interface Props {}

const PokeMarkChip = (): React.ReactElement => {
  return (
    <ChipSty>
      <NameSty>Pokémon</NameSty>
    </ChipSty>
  );
};

const ChipSty = styled.div`
  display: flex;

  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
`;

const NameSty = styled.label`
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-size: 14px;
  padding: 2px 6px;
`;

export default PokeMarkChip;
