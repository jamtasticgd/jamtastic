import { AppBar, Toolbar, Avatar, useTheme, IconButton } from "@material-ui/core"

const Navbar = () => {
    const theme = useTheme();

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar className="toolbar">
                <img src={"/images/jamtastic-logo-white.png"} alt="jamtastic" />
                <IconButton>
                    <Avatar style={{height: "40px", width: "40px"}} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;