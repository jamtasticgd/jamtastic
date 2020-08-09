import { AppBar, Toolbar, Avatar, useTheme, IconButton } from "@material-ui/core"

const Navbar = () => {
    const theme = useTheme();

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar className="toolbar">
                <img src={"/images/jamtastic-logo-white.png"} alt="jamtastic" />
                <IconButton style={{height: "60px", width: "60px"}}>
                    <Avatar style={{height: "48px", width: "48px"}} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;