import { Card, CardHeader, CardContent, Typography, Avatar, Grid, Button } from "@material-ui/core"

import RoleIcon from "../Icon"

const TeamThumb = (props) => {
    return (
        <Card style={{margin: "4px"}}>
            <CardHeader title="Nome" style={{paddingBottom: "0px"}}/>
            <CardContent>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur pretium urna, eget pulvinar nulla imperdiet non. Donec non pellentesque arcu, non congue felis.
                </Typography>
                <br/>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Membros</Typography>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Avatar alt="G" />
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle1">Procurando</Typography>
                        <Grid container spacing={1}>
                            <Grid item>
                                <RoleIcon role="art" />
                            </Grid>
                            <Grid item>
                                <RoleIcon role="audio" />
                            </Grid>
                            <Grid item>
                                <RoleIcon role="code" />
                            </Grid>
                            <Grid item>
                                <RoleIcon role="game_design" />
                            </Grid>
                            <Grid item>
                                <RoleIcon role="writing" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} container justify="flex-end" alignItems="flex-end">
                        <Button size="small" variant="contained" color="secondary" >Detalhes</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default TeamThumb;