import styled from "styled-components";
import colors from "../themes/colors";

export const Wrapper = styled.div``;

export const Label = styled.span<{ isActive: boolean }>`
  position: relative;
  min-width: 150px;
  width: 100%;
  text-align: center;
  color: ${colors.N35};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 0 8px 20px;
  margin-bottom: 16px;
  border-bottom: 4px solid ${colors.N35};
  cursor: pointer;

  :hover {
    color: ${colors.Y50};
  }

  ${({ isActive }) =>
    isActive &&
    `
      color: ${colors.Y50};
      border-bottom: 4px solid ${colors.Y50};

      :after {
        content: "";
        position: absolute;
        width: 0; 
        height: 0; 
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 8px solid ${colors.Y50};
        left: 0;
        right: 0;
        bottom: -18px;
        margin: auto;
      }
    `}
`;

export const LabelGroup = styled.div`
  display: flex;
`;

export const LabelWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Panel = styled.div<{ isActive: boolean }>`
  display: none;

  ${({ isActive }) =>
    isActive &&
    `
      display: block;
    `}
`;

export const PanelGroup = styled.div`
  margin-top: 20px;
`;