import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  background-color: ${props => props.theme.greyDark};
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
  @media only screen and (max-width: ${props => props.theme.breakPointSmall}) {
    padding: 1rem;
  }
`

const Title = styled.h1`
  font-size: ${props => props.theme.textLarge};
  text-align: center;
  `
  
  const Subtitle = styled.h2`
  font-size: ${props => props.theme.textSmall};
  text-align: center;
`

const Header = (props) => (
  <TitleWrapper>
      <Title>{props.title}</Title>
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
  </TitleWrapper>
)

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;