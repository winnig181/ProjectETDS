import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#084D6A', // Первый основной цвет
    },
    secondary: {
      main: '#48BEC5', // Второй основной цвет
    },
    success: {
        main:  '#97D779', // Третий основной цвет
    },
    background: {
      default: '#F0F1B7', // Цвет фона
    },
  },
});

export default theme;
