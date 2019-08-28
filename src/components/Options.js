import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Option from './Option';

const OptionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${(props) => props.theme.greyLight};
`;

const OptionsTitle = styled.h1`
  font-size: ${(props) => props.theme.textSmall};
  font-weight: normal;
`;

const DeleteAllButton = styled.button`
  min-width: 8rem;
  height: 2.5rem;
  background: none;
  border-style: none;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.textSmall};
  border-bottom: 1px solid currentColor;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontMain};
  outline: none;
`;

const NoOptionMessage = styled.p`
  background-color: ${(props) => props.theme.greyDark};
  font-size: ${(props) => props.theme.textSmall};
  padding: 5rem;
  border-top: 0.1rem solid ${(props) => props.theme.greyDark};
  text-align: center;
`;

const Options = ({ handleDeleteOptions, handleDeleteOption, options }) => (
  <div>
    <OptionsHeader>
      <OptionsTitle>Your Options</OptionsTitle>
      <DeleteAllButton
        onClick={handleDeleteOptions}
      >
        Remove All
      </DeleteAllButton>
    </OptionsHeader>
    {
      options.length === 0 && (
        <NoOptionMessage>
          You might want to add some options first.
        </NoOptionMessage>
      )
    }
    {
      options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))
    }
  </div>
);

Options.propTypes = {
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default Options;
