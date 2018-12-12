import React from 'react';
import styled from 'styled-components';

const AddOptionButton = styled.button`
  font-size: 2rem;
  padding: 0.8rem;
  border-style: none;
  border-bottom: 0.4rem solid ${props => props.theme.primaryColorDarken};
  color: ${props => props.theme.white};
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};
  outline: none;
  font-family: $font-main;

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
    border-bottom: 0.4rem solid ${props => props.theme.secondaryColorDarken};
  }

  &:active {
    transform: translateY(2px);
  }
`

const AddOptionForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;

  border-top: 1px solid ${props => props.theme.white};
  background-color: ${props => props.theme.greyLight};
  position: sticky;
  bottom: 0;
`

const AddOptionField = styled.input`
  height: 4.7rem;
  flex: 1;
  margin-right: 2rem;
  padding: 1.5rem;
  outline: none;
  font-size: 2rem;
  border-style: none;
  background-color: ${props => props.theme.greyDark};
  transition: all 0.3s;
  color: ${props => props.theme.white};
  border-bottom: 4px solid transparent;
  font-family: ${props => props.theme.fontMain};
  margin-right: 0;
  margin-bottom: 1rem;

  &:placeholder {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontMain};
  }

  &:focus {
    outline: none;
    border-bottom: 4px solid ${props => props.theme.secondaryColor};
  }
`;

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    e.target.elements.option.value = '';
  }
  render() {
    return (
      <AddOptionForm onSubmit={this.handleAddOption}>
        <AddOptionField
          type="text"
          name="option"
          placeholder={this.state.error ? this.state.error : 'Write your option here'}
        />
        <AddOptionButton>Add Option</AddOptionButton>
      </AddOptionForm>
    )
  }
}