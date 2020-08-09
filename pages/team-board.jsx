import { Grid } from "@material-ui/core";

const { Fragment } = require("react")
const { default: TeamThumb } = require("../components/Cards/Thumb")

const TeamBoard = () => {
    return (
        <Grid container style={{padding: "16px"}}>
            <Grid item xs={6} sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
            <Grid item sm={3}>
                <TeamThumb />
            </Grid>
        </Grid>
    )
}

export default TeamBoard;