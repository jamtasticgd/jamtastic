import { makeStyles, Avatar, Tooltip } from "@material-ui/core"

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

//Set of analagous colors
const colors = [
    "#F65FFA", 
    "#7944E3",
    "#5788FA",
    "#44D6E3",
    "#4DFF96"
]

const RoleIcon = (props) => {
    let color;
    let icon;
    let name;
    switch(props.role) {
        case "art":
            color = colors[0]
            name = "Artista"
            icon = <Art />
            break
        case "audio":
            color = colors[1]
            name = "Audio Designer"
            icon = <Audio />
            break
        case "code":
            color = colors[2]
            name = "Programador"
            icon = <Code />
            break
        case "game_design":
            color = colors[3]
            name = "Game Designer"
            icon = <Design />
            break
        case "writing":
            color = colors[4]
            name = "Escritor"
            icon = <Writing />
            break
        default:
            color = "white" 
    }

    const classes = useStyles({...props, color});

    return (
        <Tooltip title={name}> 
            <Avatar className={classes.root} >
                {icon}
            </Avatar>
        </Tooltip>
    )
}

export default RoleIcon;