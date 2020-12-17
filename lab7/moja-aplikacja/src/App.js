import './App.css';
import {Menu,MenuItem,Button,TextField} from '@material-ui/core'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import arthas from './images/arthas.jpg';
import illidan from './images/illidan.jpg';
import fale from './images/fale ciemnosci.jpg';
import man from './images/man.svg';

/*Komponenty*/
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

//app .js jest głownym komponentem który zostaje wyrenderowany do DOM
//app .js functional komponent
//Default importa mozna nazwać jak się chce
function App() {
    return (
        <div>
            <NavBar></NavBar>
        </div>      
    );      
}

function NavBar(){
    return(
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  hunderPercentWidth">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/content">Content</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Avatar alt="Marcin Reszke" src={man} />
                        </li>
                    </ul>    
                </div>
            </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/content">
                <   Content />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
      </Router>
    )
}

function Home() {
    return (
        <div className='paddingAfterNav'>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <BasicTable></BasicTable>
                </Grid>
                <Grid item xs={6}>
                    <BasicTable2></BasicTable2>
                </Grid>
            </Grid>
        </div>
        
    )
}

function About() {
    return (
        <InteractiveList></InteractiveList>
    )
}

function InteractiveList() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
    <div  style={{
        backgroundColor: 'rgb(241, 243, 247)',
        height:'100vh',
        overflow:'hidden',
        padding: '2rem 0 0 0'
      }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />
            }
            label="Zmniejsz rozmiar"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="Włącz dodatkowy opis"
          />
        </FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>
              <List dense={dense} >
                    <ListItem >
                    <ListItemText
                      primary={
                        <Typography fontWeight="fontWeightBold" variant="h6">
                            Klasyfikacja zwycięstw najlepszych państw w skokach Narciarskich
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem >
                    <ListItemText
                      primary="Austria - 256 zwycięstw"
                      secondary={secondary ? 'od 1979 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Finlandia - 151 zwycięstw"
                      secondary={secondary ? 'od 1980 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Niemcy(RFN) - 123 zwycięstw"
                      secondary={secondary ? 'od 1987 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Norwegia - 119 zwycięstw"
                      secondary={secondary ? 'od 1980 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Polska - 89 zwycięstw"
                      secondary={secondary ? 'od 1980 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Japonia - 81 zwycięstw"
                      secondary={secondary ? 'od 1980 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Słowenia - 59 zwycięstw"
                      secondary={secondary ? 'od 1996 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="NRD - 28 zwycięstw"
                      secondary={secondary ? 'od 1979 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Czechosłowacja - 19 zwycięstw"
                      secondary={secondary ? 'od 1983 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Czechy - 17 zwycięstw"
                      secondary={secondary ? 'od 1993 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Kanada - 14 zwycięstw"
                      secondary={secondary ? 'od 1980 roku' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Jugosławia - 10 zwycięstw"
                      secondary={secondary ? 'od 1981 roku' : null}
                    />
                  </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

function Content() {
    return (
        <Box
            boxShadow={10}
            bgcolor="rgb(241, 243, 247)!important"
            style={{ width: '50%'}}
        >
            <FunctionalComp></FunctionalComp>
            <Parent></Parent>
      </Box>
    )
}

function createData(miejsce, zawodnik, kraj, punkty) {
    return { miejsce, zawodnik, kraj, punkty };
  }

const rows = [
  createData(1,'Egner Halvor Granerud','Norwegia',300 ),
  createData(2,'Markus Eisenbichler','Niemcy',283),
  createData(3,'Yukiya Sato','Japonia',163),
  createData(4,'Dawid Kubacki','Polska',144),
  createData(5,'Karl Geiger','Niemcy',141),
  createData(6,'Robert Johansson','Norwegia',140),
  createData(6,'Daniel Huber','Austria',140),
  createData(8,'Piotr Żyła','Polska',133),
  createData(9,'Pius Paschke','Niemcy',109),
  createData(10,'Anze Lanisek','Słowenia',95),
];

const rows2 = [
    createData(1,'Karl Geiger','Niemcy',877.2 ),
    createData(2,'Egner Halvor Granerud','Norwegia',876,5),
    createData(3,'Markus Eisenbichler','Niemcy',859,3),
    createData(4,'Michael Hayboeck','Austria',845.1),
    createData(5,'Robert Johansson','Norwegia',841),
    createData(6,'Yukiya Sato','Japonia',835,1),
    createData(7,'Piotr Żyła','Polska',828.6),
    createData(8,'Kamil Stoch','Polska',808.5),
    createData(9,'Evgeniy Klimov','Rosja',802.2),
    createData(10,'Andrzej Stękała','Polska',792.4),
  ];

const useStyles = makeStyles({
    table: {
      color:'red!important',
      width:'25%'
    },
});

const useStylesTable = makeStyles({
    table: {
      color:'black!important',
      fontWeight:'600',
      width:'100%',
      textAlign:'center'
    },
});

function BasicTable() {
    const classes = useStyles();
    const classesTable = useStylesTable();
    return (
      <TableContainer component={Paper} className={classesTable.table}>
          Puchar Świata w Skokach Narciarskich 2020/2021 <br></br>- Klasyfikacja:
        <Table aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell className={classes.table}align="center">Miejsce </TableCell>
              <TableCell className={classes.table} align="center">Zawodnik</TableCell>
              <TableCell className={classes.table}align="center">Kraj</TableCell>
              <TableCell className={classes.table}align="center">Punkty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow key={row.miejsce}>
                <TableCell component="th" scope="row" align="center">
                  {row.miejsce}
                </TableCell>
                <TableCell align="center">{row.zawodnik}</TableCell>
                <TableCell align="center">{row.kraj}</TableCell>
                <TableCell align="center">{row.punkty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function BasicTable2() {
    const classes = useStyles();
    const classesTable = useStylesTable();
    return (
      <TableContainer component={Paper} className={classesTable.table}>
          Mistrzostwa Świata w lotach Planica 2020 <br></br>- Klasyfikacja:
        <Table aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell className={classes.table}align="center">Miejsce </TableCell>
              <TableCell className={classes.table} align="center">Zawodnik</TableCell>
              <TableCell className={classes.table}align="center">Kraj</TableCell>
              <TableCell className={classes.table}align="center">Punkty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.miejsce}>
                <TableCell component="th" scope="row" align="center">
                  {row.miejsce}
                </TableCell>
                <TableCell align="center">{row.zawodnik}</TableCell>
                <TableCell align="center">{row.kraj}</TableCell>
                <TableCell align="center">{row.punkty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

function FunctionalComp(){
    return <div><h1 className="appHeader">Katalog Książek</h1></div>
}


class Parent extends React.Component{
    render(){
        const BOOKS = [
            {
                id:1,
                tytul:"Arthas - Przebudzenie Króla Lisza",
                autor:"Christie golden",
                liczbaStron: 365,
                gatunek: "Fantasy",
                uniwersum: "Warcraft",
                image: arthas,
                cena: "40 pln",
                data: "2009-04-21"
    
            },
            {
                id:2,
                tytul:"Illidan",
                autor:"William King",
                liczbaStron: 414,
                gatunek: "Fantasy",
                uniwersum: "Warcraft",
                image: illidan,
                cena: "40 pln",
                data: "2016-04-12"
            },
            {
                id:3,
                tytul:"Fale ciemności",
                autor:"Aaron Rosenberg",
                liczbaStron: 324,
                gatunek: "Fantasy",
                uniwersum: "Warcraft",
                image: fale,
                cena: "40 pln",
                data: "2007-08-28"
            }
        ];
        return(
            <div className="imagesAndDescriptionWrapper">
                 <div><Child books={BOOKS}></Child></div>
                 <div><ChildImg images={BOOKS}></ChildImg></div>
            </div>
           
        );
    }
}

class Child extends React.Component{
    render(){
        return(
            <div>
                {this.props.books.map(function(Book){
                        return(
                            <div className="bookdiv" key={Book.id}>
                                <span className="text-primary">Tytuł książki: <br></br>{Book.tytul} </span>
                                <br></br>
                                <span>Autor: {Book.autor} </span>
                                <br></br>
                                <span>Gatunek: {Book.gatunek} </span>
                                <br></br>
                                <span>Uniwersum: {Book.uniwersum} </span>
                                <br></br>
                                <span>Liczba stron: {Book.liczbaStron}</span>
                                <div className="flexerino">
                                    <form className={Child.container} noValidate>
                                        <TextField
                                            id="date"
                                            label="Data Wydania:"
                                            defaultValue={Book.data}
                                            className={Child.textField}
                                            InputLabelProps={{
                                            shrink: true, style:{fontSize:'1.3rem',color:'black', lineHeight:'35px',padding:'0px!important'},
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CalendarTodayIcon />
                                                    </InputAdornment>
                                                ),
                                                style:{fontSize:'1.3rem',marginTop:'35px',paddingTop:'0px'},
                                            }}
                                        />
                                    </form>
                                </div>
                            </div>
                                
                        )
                    })
                }
            </div>
        )
    }
}

class ChildImg extends React.Component{
   constructor(props){
        super(props)
        this.state = {
            isSet: false,
            message: '',
        }
        this.handleClick = this.handleClick.bind(this)
   } 

    handleClick(key) {
        this.setState(state => ({
            message: this.props.images[0].cena,
            isSet: !this.state.isSet
        }));
        if(this.state.isSet){
            document.querySelectorAll(".spanCena")[key-1].style.display = "none"
            document.querySelectorAll(".spanCena")[key-1].className = "spanCena text-warning"
            //document.querySelectorAll(".bookdiv")[key-1].style.fontSize = "1.3rem"
            document.querySelectorAll(".img")[key-1].style.width = "11.2rem"
        }
        else{
            document.querySelectorAll(".spanCena")[key-1].style.display = "block"
            document.querySelectorAll(".spanCena")[key-1].className = "spanCena text-warning"
            //document.querySelectorAll(".bookdiv")[key-1].style.fontSize = "2rem"
            document.querySelectorAll(".img")[key-1].style.width = "10rem"
        } 
      }

    render(){
        return(
            <div>
                {this.props.images.map((Book)=>{
                        return(
                            <div className="bookdivImg" key={Book.id}>
                                <img className="img"src={Book.image} onClick={()=>this.handleClick(Book.id)} alt="logo" />
                                <span className={"spanCena"} >{this.state.message} </span>
                            </div>       
                        )
                    })
                }
            </div>
        )
    }
}
export default App;