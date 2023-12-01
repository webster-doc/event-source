import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 9;

  padding: 10px 0;
  background-color: ${({theme}) => theme.palette.backgrounds.primary};
  box-shadow: ${({theme}) => theme.boxShadow.primary};
`;

export const Logo = styled.img`
  width: 40px;
`;
