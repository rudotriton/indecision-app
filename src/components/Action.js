import React from 'react';
import styled from 'styled-components';

const ActionButton = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primaryColor};
  border-style: none;
  border-bottom: 8px solid ${props => props.theme.primaryColorDarken};
  cursor: pointer;
  font-size: ${props => props.theme.textMedium};
  letter-spacing: 1px;
  margin: 2rem 0;
  outline: none;
  padding: 3rem;
  width: 100%;

  @media only screen and (max-width: ${props => props.theme.bpSmall}) {
    margin: 2rem 0;
    padding: 2rem;
  }

  &:disabled {
    background-color: ${props => props.theme.greyLight};
    border-bottom-color: ${props => props.theme.greyDark};
    cursor: default;
  }
`

const Action = (props) => (
  <>
    <ActionButton onClick={props.handlePick} disabled={props.disabled}>Pick an Option</ActionButton>
  </>
)


export default Action;