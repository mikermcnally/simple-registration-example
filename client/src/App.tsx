import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';
import { ProvideApi } from './hooks/use_api';
import RouterView from './components/RouterView';
import { useStyles } from './hooks/use_styles';

function App() {
  const classes = useStyles();
  const prefers_dark_mode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefers_dark_mode ? 'dark' : 'light',
          primary: {
            light: '#172743',
            main: '#172743',
            dark: '#172743',
          },
          secondary: {
            light: '#d9534f',
            main: '#d9534f',
            dark: '#d9534f',
          },
        },
      }),
    [prefers_dark_mode],
  );

  return (
    <ProvideApi>
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <main className={classes.content}>
              <RouterView />
            </main>
          </div>
        </ThemeProvider>
      </Router>
    </ProvideApi>
  );
}

export default App;
