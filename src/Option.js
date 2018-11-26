import React from 'react';
import styled from 'styled-components';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.greyDark};
  font-size: 2rem;
  padding: 2rem;
  border-top: 0.1px solid ${props => props.theme.greyLight};
  word-break: break-all;
`

const RemoveButton = styled.button`
  min-width: 9rem;
  height: 2.5rem;
  background: none;
  border-style: none;
  margin-left: 2rem;
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.textSmall};
  border-bottom: 1px solid currentColor;
  cursor: pointer;
  font-family: ${props => props.theme.fontMain};
  outline: none;

  &:hover {
    color: ${props => props.theme.secondaryColor};
  }

  &:active {
    transform: translateY(2px);
  }

  @media only screen and (max-width: ${props => props.theme.bpSmall}) {
    min-width: 7rem;
  }
`

const Option = (props) => (
  <OptionWrapper>
    {props.optionText}
    <RemoveButton
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      Remove
    </RemoveButton>
  </OptionWrapper>
)

export default Option;