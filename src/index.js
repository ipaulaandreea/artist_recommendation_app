import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#013e87'
//     },
//     secondary: {
//       main: '#2e74c9'
//     }
//   },
//   typography: {
//     h1: {
//       fontSize: '3rem',
//       fontWeight: 600
//     },
//     h2: {
//       fontSize: '1.75rem',
//       fontWeight: 600
//     },
//     h3: {
//       fontSize: '1.5rem',
//       fontWeight: 600
//     }
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <ThemeProvider theme={theme}>
    <App />
  // </ThemeProvider>
)
