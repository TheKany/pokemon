import React from "react";
import styled from "@emotion/styled";

// interface Props {}

const PokeNameChip = (): React.ReactElement => {
  return (
    <ChipSty>
      <IndexSty>001 </IndexSty>
      <NameSty>이상해씨</NameSty>
    </ChipSty>
  );
};

const ChipSty = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  line-height: 1.2;
  font-weight: 500;
`;

const IndexSty = styled.div`
  padding: 3px 8px;
  background-color: green;
  border-radius: 16px;
  font-size: 14px;
`;

const NameSty = styled.label`
  font-size: 14px;
  padding: 3px 2px;
  margin: 0 5px;
`;

export default PokeNameChip;
