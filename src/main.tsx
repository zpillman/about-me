import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import {CssBaseline} from "@mui/material";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <StyledEngineProvider injectFirst>
              <CssBaseline />
              <App />
          </StyledEngineProvider>
  </React.StrictMode>,
)
