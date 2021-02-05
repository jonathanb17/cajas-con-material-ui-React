import { makeStyles } from "@material-ui/core/styles";

import icono from '../assets/iconoCanal.png';

import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    flexcontainer: {
        display: "flex",
        justifyContent: "center"
    },

    flexitem: {
        height: "46px",
        width: "120px",
        textAlign: "center",
        fontFamily: "Bebas-Bold",
        color: "grey",
        cursor: "pointer",
    },

    img: {
        width: "160px",
        height: "160px",
        marginBottom: "10px"
    }
}));

const datos = [
    {
        id: 1,
        title: "Desarrollador Jr"
    },
    {
        id: 2,
        title: "React"
    },
    {
        id: 3,
        title: "Javascript"
    },
    {
        id: 4,
        title: "Frontend Jr"
    },
]


const Columna1 = () => {
    const classes = useStyles();


    return (
        <>

            <Container maxWidth="xl" className={classes.flexcontainer}>
                <Grid container spacing={1}>
                    <img src={icono} alt="" className={classes.img} />
                    <>
                        {
                            datos.map((inf, i) => {
                                return <Grid d item xs={12} md={12} lg={12} key={`${inf.id}-${i}`} className={classes.flexitem}>
                                    <p>{`${inf.title}`}</p>
                                </Grid>
                            })
                        }
                    </>

                </Grid>
            </Container >
        </>
    );
};

export default Columna1;
