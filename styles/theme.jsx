import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FAB31B"
        },
        secondary: {
            main: "#1B62FA"
        }
    },
    overrides: {
        MuiAvatar: {
            root: {
                height: "32px",
                width: "32px"
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: "1rem"
            }
        }
    }
})