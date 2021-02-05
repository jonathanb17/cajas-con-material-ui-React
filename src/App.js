import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import './App.css';
import Columna1 from "./components/Columna1";
import Columna2 from "./components/Columna2";


const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    fontFamily: "Bebas-Bold",
  }
}));


function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={3} lg={2}>
              <Columna1 />
            </Grid>
            <Grid item xs={8} md={9} lg={10}>
              <Columna2 />
            </Grid>
          </Grid>
        </Container>
      </>
    </div>
  );
}

export default App;
