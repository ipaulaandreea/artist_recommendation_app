import { AppBar, Paper, ThemeProvider, createTheme} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  


const Header = () => {

      return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{flexGrow: 1 }}>
          <AppBar position="static" sx={{color: '#ff3366', height: "70px", display: "flex",
            alignItems: "center",}}>
            <Toolbar>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                GIGFREAK
              </Typography>
             
            </Toolbar>
          </AppBar>
        </Box>
        </ThemeProvider>
      );
    }
    


export default Header;