import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledModal = Modal.styled`
  min-width: 20rem;
  min-height: 20rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.greyLight};

  @media only screen and (max-width: ${(props) => props.theme.bpSmall}) {
    min-width: 30rem;
    min-height: 30rem;
  }
`;

const ModalTitle = styled.h3`
  font-size: ${(props) => props.theme.textSmall};
  border-bottom: 1px solid ${(props) => props.theme.white};

  @media only screen and (max-width: ${(props) => props.theme.bpSmall}) {
    font-size: ${(props) => props.theme.textMedium};
  }
`;

const CloseButton = styled.button`
  font-size: ${(props) => props.theme.textSmall};
  padding: 0.8rem;
  border-style: none;
  border-bottom: 0.4rem solid ${(props) => props.theme.primaryColorDarken};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};
  outline: none;
  font-family: ${(props) => props.theme.fontMain};

  @media only screen and (max-width: ${(props) => props.theme.bpSmall}) {
    padding: 0.8rem 2rem;
    font-size: ${(props) => props.theme.textMedium};
  }
`;

const Selected = styled.p`
  font-size: ${(props) => props.theme.textSmall};

  @media only screen and (max-width: ${(props) => props.theme.bpSmall}) {
    font-size: ${(props) => props.theme.textMedium}
  }
`;

const OptionModal = ({ selectedOption, handleModalClose }) => (
  <StyledModal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    onBackgroundClick={handleModalClose}
    onEscapeKeydown={handleModalClose}
  >
    <ModalTitle>I have picked</ModalTitle>
    {
      selectedOption !== '' && (
        <Selected>{selectedOption}</Selected>
      )
    }
    <CloseButton
      onClick={handleModalClose}
    >
      Alright
    </CloseButton>
  </StyledModal>
);

OptionModal.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default OptionModal;
