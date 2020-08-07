import { makeStyles, Avatar } from "@material-ui/core"

import Art from "@material-ui/icons/Brush"
import Audio from "@material-ui/icons/Audiotrack"
import Code from "@material-ui/icons/Code"
import Design from "@material-ui/icons/Extension"
import Writing from "@material-ui/icons/Create"

const useStyles = makeStyles({
    root: {
        backgroundColor: props => props.color        
    }
});

const RoleIcon = (props) => {
    let color;
    let icon;
    switch(props.role) {
        case "art":
            color = "red";
            icon = <Art />
            break
        case "audio":
            color = "blue"
            icon = <Audio />
            break
        case "code":
            color = "green"
            icon = <Code />
            break
        default:
            color = "white" 
    }

    const classes = useStyles({...props, color});

    return <Avatar className={classes.root} >{icon}</Avatar>
}

export default RoleIcon;