import styled, { css } from "styled-components";
import { colors } from "../../themes";

type sizeType = "middle";

const styleType = {
  middle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
};

export const Container = styled.div`
  background: #ecf0f1;

  ${({ size }: { size: sizeType }) => styleType[size]};
`;

export const ContentStyle = styled.div`
  width: 60%;
  background: ${colors.N0};
  padding: 2rem 1.5rem;
`;
