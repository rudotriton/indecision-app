import React, { useEffect, useState } from 'react';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

const AppWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: ${(props) => props.theme.bpSmall}) {
    padding: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: ${(props) => props.theme.bpSmall}) {
      font-size: 56.25%;
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
    color: ${(props) => (props.theme.white)};
    font-family: ${(props) => (props.theme.fontMain)};

    background: #000;
    background: linear-gradient(to bottom, $color-tertiary 0%, rgb(97, 0, 92) 100%);
    background-attachment: fixed;
    height: 100vh;
    position: relative;
  }
`;
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
  bpSmall: '500px',
};

const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: rgba(0,0,0,0.8);
`;

const App = () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('');

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => option !== optionToRemove));
  };

  const handlePick = () => {
    setSelected(options[Math.floor(Math.random() * options.length)]);
  };

  const handleModalClose = () => {
    setSelected('');
  };

  const handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value.';
    } if (options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    setOptions(options.concat(option));

    return 'Write your option here';
  };

  useEffect(() => {
    try {
      const json = localStorage.getItem('options');
      const storedOptions = JSON.parse(json);

      if (storedOptions) {
        setOptions(storedOptions);
      }
    } catch (e) {
      // do nothing
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(options);
    localStorage.setItem('options', json);
  }, [options]);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          <GlobalStyle />
          <Header />
          <Action
            disabled={options.length === 0}
            handlePick={handlePick}
          />
          <Options
            options={options}
            handleDeleteOptions={handleDeleteOptions}
            handleDeleteOption={handleDeleteOption}
          />
          <AddOption
            handleAddOption={handleAddOption}
          />
          <OptionModal
            selectedOption={selected}
            handleModalClose={handleModalClose}
          />
        </ModalProvider>
      </AppWrapper>
    </ThemeProvider>
  );
};


export default App;
