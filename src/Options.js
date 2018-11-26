import React from 'react';
import Option from './Option';
import styled from 'styled-components';

const OptionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${props => props.theme.greyLight};
`

const OptionsTitle = styled.h1`
  font-size: ${props => props.theme.textSmall};
  font-weight: normal;
`

const DeleteAllButton = styled.button`
  min-width: 8rem;
  height: 2.5rem;
  background: none;
  border-style: none;
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
`

const NoOptionMessage = styled.p`
  background-color: ${props => props.theme.greyDark};
  font-size: ${props => props.theme.textSmall};
  padding: 5rem;
  border-top: 0.1rem solid ${props => props.theme.greyDark};
  text-align: center;
`

const Options = (props) => (
  <div>
    <OptionsHeader>
      <OptionsTitle>Your Options</OptionsTitle>
      <DeleteAllButton onClick={props.handleDeleteOptions}>Remove All</DeleteAllButton>
    </OptionsHeader>
    {
      props.options.length === 0 && <NoOptionMessage>You might want to add some options first.</NoOptionMessage>
    }
    {
      props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption} />
      )
      )
    }
  </div>
)

export default Options;