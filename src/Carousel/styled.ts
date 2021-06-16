import styled from 'styled-components';

export const Button = styled.button<{ prev?: boolean; next?: boolean }>`
  width: 72px;
  height: 72px;
  background: none;
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  transition: opacity 0.25s;
  padding: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media screen and (max-width: 1023px) {
    margin: 0;
    top: auto;
    bottom: 118px;
  }
  @media screen and (max-width: 767px) {
    visibility: hidden;
  }
  ${({ prev }) => prev && 'left:-36px;'}
  ${({ next }) => next && 'right:-36px;'}
`;

export const CarouselContainer = styled.div`
  position: relative;
`;

export const OverFlow = styled.div`
  overflow: hidden;
`;
export const Carousel = styled.div`
  display: flex;
  position: relative;
`;

export const CarouselItem = styled.div<{ displayCount: number }>`
  flex: 0 0 ${({ displayCount }) => 100 / displayCount}%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const SmallController = styled.div<{ visible?: boolean }>`
  position: absolute;
  width: 100%;
  bottom: -32px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ visible }) => !visible && 'display:none'};
`;

export const ArrowButton = styled.button`
  width: 12px;
  height: 18px;
  background: none;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const DotGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;
  & > button:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const DotButton = styled.button<{
  active?: boolean;
}>`
  background: none;
  border: none;
  width: 14px;
  height: 14px;
  position: relative;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    background: ${({ active }) => (active ? '#000' : '#ddd')};
  }
  @media screen and (max-width: 1023px) {
    width: 10px;
    height: 10px;
  }
`;
