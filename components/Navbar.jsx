import { AppBar, Toolbar, Avatar, useTheme, IconButton } from "@material-ui/core"

const Navbar = () => {
    const theme = useTheme();

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar className="toolbar">
                <img src={"/images/jamtastic-logo-white.png"} alt="jamtastic" />
                <IconButton>
                    <Avatar />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;