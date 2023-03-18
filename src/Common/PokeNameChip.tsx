import React from "react";
import styled from "@emotion/styled";

interface PokeNameChipProps {
  id: number;
  name: string;
  color: string;
}

const PokeNameChip = (props: PokeNameChipProps): React.ReactElement => {
  const renderNumber = (id: number) => {
    const toStringId = id.toString();

    if (toStringId.length > 2) {
      return toStringId;
    }

    if (toStringId.length > 1) {
      return `0${toStringId}`;
    }

    return `00${toStringId}`;
  };

  return (
    <ChipSty>
      <IndexSty color={props.color}>{renderNumber(props.id)}</IndexSty>
      <NameSty>{props.name}</NameSty>
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

const IndexSty = styled.div<{ color: string }>`
  padding: 3px 8px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  font-size: 14px;
`;

const NameSty = styled.label`
  font-size: 14px;
  padding: 3px 2px;
  margin: 0 5px;
`;

export default PokeNameChip;
