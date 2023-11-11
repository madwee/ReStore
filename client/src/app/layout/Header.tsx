    import { ShoppingCart } from "@mui/icons-material";
    import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
    import { NavLink } from "react-router-dom";
    import Navbar from "./Navbar";



    
    const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
    ]

    const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
    ]

    interface Props {
    darkMode:boolean;
    handleThemeChange: () => void;
    }

    const navStyle = {
        color:'inherit',
        textDecoration:'none', 
        typography:'h6',
        '&:hover':{
        color:'grey.300'
        },
        '&.active':{
        color: 'text.primary'
        }
    }

   
    
    export default function Header({darkMode, handleThemeChange}: Props){
    return(
    <AppBar position='static' sx={{mb:4}}>
    <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

    <Box display='flex' alignItems='center'>
        <Typography variant='h6'
            component={NavLink}
            to='/'
            sx={navStyle}
        >
            RE-STORE
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
    </Box>
        
        
        
    <List sx={{ display: {xs:'none',md:'flex'}}}>
    {midLinks.map(({ title, path }) => (
    <ListItem
        component={NavLink}
        to={path}
        key={path}
        sx={navStyle}
    >
        {title.toUpperCase()}
    </ListItem>
    ))}
    </List>
    
    <Box sx={{display:{xs:'none',md:'flex'}}} alignItems='center'>
    <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
    <Badge badgeContent='4' color='error'>
        <ShoppingCart />
    </Badge>
    </IconButton>

    <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
    {rightLinks.map(({ title, path }) => (
        <ListItem
            component={NavLink}
            to={path}
            key={path}
            sx={navStyle}
        >
            {title.toUpperCase()}
        </ListItem>
    ))}
    </List>
 
    </Box>
      
      <Box sx={{display:{xs:'flex',md:'none'}}}>
      <Navbar />  
      </Box>
    </Toolbar>

    </AppBar>

    )
    }