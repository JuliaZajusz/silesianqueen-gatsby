import React from "react";
import Button from '@mui/material/Button'
import { createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    jumbotron: {
        minHeight: '100vh',
        display: "grid",
        placeItems: 'center',
        paddingBottom: 60,
        background: "url(https://source.unsplash.com/random) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
}));

interface JumbotronProps {
    title: string
}

const Jumbotron: React.FC<JumbotronProps> = (props) => {
    const { title } = props;
    const classes = useStyles();

    return (
        <div className={classes.jumbotron}>
            {title}
            <Button variant="contained">Hello World</Button>
        </div>
    )
}

export default Jumbotron;