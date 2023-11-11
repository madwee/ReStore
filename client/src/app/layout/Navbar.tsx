import { Menu } from "@mui/icons-material";
import { Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]


export default function Navbar (){
const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
    display:'flex',
    alignItems:'center',
    padding:theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent:'flex-end',
}));
const theme = useTheme();
const [open,setOpen] = useState(false);
const handleDrawerOpen = () =>{
    setOpen(true);
}
const handleDrawerClose = () =>{
    setOpen(false);
}
return(
    <>
    <Drawer open={open} variant="persistent" anchor="left"
        
        sx={{
            
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
    >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {midLinks.map(({title, path}) => (
                <ListItem
                    component={NavLink}
                    to={path}
                    key={path}    
                >
                    {title.toUpperCase()}
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
    {rightLinks.map(({ title, path }) => (
        <ListItem
            component={NavLink}
            to={path}
            key={path}

        >
            {title.toUpperCase()}
        </ListItem>
    ))}
    </List>
    </Drawer>
    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} sx={{ mr: 2, ...(open && { display: 'none' }) }}>
        <Menu />
    </IconButton>
    </>
)
}