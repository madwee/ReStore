import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background:{
        default:paletteType === 'light' ? '#f5f5f5' :'#121212'
      },
      primary:{
        main:'#4aa0a9',
      },
      secondary:{
        main: '#b02739',
      }
      
     
    
      

      
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
    <CssBaseline />
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
    
    <Container>
   <Outlet />
    </Container>
    
  
    </ThemeProvider>
    
  );
}

export default App
