import React from "react";
import Button from '@mui/material/Button'
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
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
    },
    image: {
        width: "100%",
        position: "absolute",
    },
    title: {
        zIndex: 2,
        color: "white",
    }
}));

interface JumbotronProps {
    title: string,
    heading?: React.ReactNode,
    image?: React.ReactNode,
}

const Jumbotron: React.FC<JumbotronProps> = (props) => {
    const { title, heading, image } = props;
    const classes = useStyles();

    return (
        <div className={classes.jumbotron}>
            {image && <div className={classes.image}>
                {image}
            </div>
            }
            <h1 className={classes.title}>{title}</h1>
            {heading}
            <Button variant="contained">Hello World</Button>
        </div >
    )
}

export default Jumbotron;