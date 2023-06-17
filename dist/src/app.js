import React from 'react';
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import { Input } from 'ui/atoms/Input';
import { Button } from 'ui/atoms/Button';
import { Textarea } from 'ui/atoms/Textarea';
import { Select } from 'ui/atoms/Select/Select';
import { genderOptions } from "./consts";
import { Card } from "./ui/templates/Card";
// import img from "./ui/atoms/Avatar/IMG_6305.png";
import { Head } from 'ui/organisms/ProfileForm/Head';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle `
  body {
    background-color: #F4F4F5;
  }
`;
export const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyle, null),
        React.createElement(CloudThemeProvider, { theme: theme },
            React.createElement(Card, null,
                React.createElement(Head, null),
                React.createElement(Input, { placeholder: 'username/email', label: 'Nickname' }),
                React.createElement(Button, null, "Start"),
                React.createElement(Textarea, { placeholder: 'placeholder', tip: 'Tip', label: 'About' }),
                React.createElement(Select, { options: genderOptions })))));
};
