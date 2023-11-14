// styles.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkButton = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

export const StyledPrimaryButton = styled.button`
  background-color: #000000;
  border-color: #ffffff;
  color: #fff;

  &:hover {
    background-color: #000000;
    border-color: #0056b3;
    color: #fff;
  }
`;

