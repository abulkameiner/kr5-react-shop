import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: { main: '#ab4026' },
    secondary: { main: '#5c4a42' },
    background: { default: '#faf5ef' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    button: { textTransform: 'none' }
  }
});

export default muiTheme;