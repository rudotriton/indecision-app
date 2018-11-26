import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import { ModalProvider } from 'styled-react-modal';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: ${props => props.theme.bpSmall}) {
    padding: 0;
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: ${props => props.theme.bpSmall}) {
      // font-size: 56.25%;
      font-size: 40%;
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: ${props => (props.theme.white)};
    font-family: ${props => (props.theme.fontMain)};

    background: #000;
    background: linear-gradient(to bottom, $color-tertiary 0%, rgb(97, 0, 92) 100%);
    background-attachment: fixed;
    height: 100vh;
    position: relative;
  }
`
const theme = {
  primaryColor: 'rgb(131, 58, 180)',
  primaryColorDarken: 'rgb(104,46,141)',
  secondaryColor: 'rgb(165, 66, 231)',
  secondaryColorDarken: 'rgb(142, 27, 218)',
  greyLight: '#333',
  greyDark: '#222',
  white: '#eee',
  fontMain: 'Montserrat',
  textLarge: '6rem',
  textMedium: '3rem',
  textSmall: '2rem',
  bpSmall: '32.25rem'
}

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  }
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }))
  }
  handlePick = () => {
    this.setState(() =>({
      selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]}));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add an option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already on the list.';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  handleModalClose = () => {
    this.setState(() => ({selectedOption: undefined}))
  }
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ModalProvider>
          <GlobalStyle />
            <Header
              subtitle={subtitle}
            />
            <Action
              disabled={this.state.options.length === 0}
              handlePick={this.handlePick}
            />
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleModalClose={this.handleModalClose}
            />
          </ModalProvider>
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
};