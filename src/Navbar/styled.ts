import styled from 'styled-components';

import colors from '../themes/colors';
import breakpoints from '../themes/breakpoints';
import zIndex from '../themes/zIndex';

export const Container = styled.nav`
  background: ${colors.N0};
  width: 100%;
  position: relative;

  ${({ isFixed }: { isFixed: boolean }) =>
    isFixed
      ? `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: ${zIndex[5]};
        box-shadow:         
        0px 5px 7px 0px rgba(0, 0, 0, 0.15);      `
      : ''}
`;

export const Wrapper = styled.div`
  height: 80px;
  max-width: 1160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  margin: auto;

  @media ${breakpoints.down('lg')} {
    height: 70px;
  }
  @media ${breakpoints.down('md')} {
    padding: 0 16px;
  }
`;

export const Menu = styled.div<{ isCollapse: boolean; isFixed: boolean }>`
  display: inline-flex;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: ${colors.N0};
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${zIndex[5]};

  @media ${breakpoints.down('lg')} {
    height: ${({ isCollapse }) => (isCollapse ? 0 : 'calc(100vh - 70px)')};
    position: absolute;
    top: 70px;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  margin: 0;

  @media ${breakpoints.down('lg')} {
    margin: 40px;
  }
  @media ${breakpoints.down('md')} {
    margin: 16px;
  }
`;

export const MenuBtnWrapper = styled.span`
  display: none;

  @media ${breakpoints.down('lg')} {
    display: inline-flex;
  }
`;
