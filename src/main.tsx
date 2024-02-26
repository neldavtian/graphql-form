import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { SignUpForm } from './components'

import './index.css'

const client = new ApolloClient({
  uri: 'http://152.228.215.94:83/api/',
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: deepPurple,
    background: {
      default: "#9c27b0"
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <SignUpForm />
    </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
