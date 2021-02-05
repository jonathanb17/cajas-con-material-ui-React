import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";


const useStyles = makeStyles(() => ({
    flexcontainer: {
        display: "flex",
        marginTop: "20px",
    },

    flexitem: {
        backgroundColor: "#2d4144",
        color: "white",
        height: "180px",
        width: "8px",
        fontFamily: "Bebas-Bold",
        textAlign: "center",
        border: "3px solid white",
        cursor: "pointer",
        opacity: "0.7"
    },
    informacion: {
        marginTop: "69px",
    }
}));

const info = [
    {
        id: 1,
        title: "tren loco",
    },
    {
        id: 2,
        title: "rata blanca",
    },
    {
        id: 3,
        title: "metallica",
    },
    {
        id: 4,
        title: "barni",
    },
    {
        id: 5,
        title: "guardian",
    },
    {
        id: 6,
        title: "aaaa",
    },
    {
        id: 7,
        title: "aadfghjk",
    },
    {
        id: 8,
        title: "titulos",
    },
    {
        id: 9,
        title: "control activos",
    },
    {
        id: 10,
        title: "estadio",
    },
    {
        id: 11,
        title: "computacion",
    },
    {
        id: 12,
        title: "micro",
    },
];
/** 12(elementos) / 2(lg) -> 6 columnas */
const Columna2 = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl" className={classes.flexcontainer}>
                <Grid container spacing={1}>
                    <>
                        {info.map((inf, i) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    md={3}
                                    lg={2}
                                    key={`${inf.id}-${i}`}
                                    className={classes.flexitem}
                                >
                                    <p className={classes.informacion}>{`${inf.title}`}</p>
                                </Grid>
                            );
                        })}
                    </>
                </Grid>
            </Container>
        </>
    );
};

export default Columna2;
