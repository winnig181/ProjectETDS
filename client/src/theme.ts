import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Первый основной цвет
    },
    secondary: {
      main: '#fec701', // Второй основной цвет
    },
    success: {
        main:  '#97D779', // Третий основной цвет
    },
    background: {
      default: '#F0F1B7', // Цвет фона
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif', // Добавьте Open Sans как основной шрифт
    fontWeightBold: 700, 
  },
});

export default theme;
