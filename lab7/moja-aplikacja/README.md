# Do wykonania laboratorium wykorzystałem gotową już stronę z laboratorium nr 6. Stworzyłem 3 podstrony.

# Material UI oferuje programiście bardzo dużo możliwości. Przede wszystkim ułatwia nam pracę oraz w świetny sposób opisuje jak działają poszczególne komponenty.

## Wykorzystane komponenty do tworzenia strony z ```Material UI```:
```javascript
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
```

## Wszystkie podstrony korzystają z tego samego ```NavBara```. **NavBar** wykorzystałem z ```Bootsrapa``` ostylowałem go do potrzeb **reacta z material UI**. W menu głównym znajduję się ```Avatar``` z material UI.

## Tak przedstawia się kod z którego korzysta każda z podstron:

```javascript
function NavBar(){
    return(
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-      expanded="false" aria-label="Toggle navigation">
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
```

A tak natomiast przedstawia się komponent główny:
```javascript
function App() {
    return (
        <div>
            <NavBar></NavBar>
        </div>      
    );      
}
```
# Home
## Tak przedstawia się gotowa strona ```Home```:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab7/zrzuty/1.PNG)


## Kod do podstrony **Home**. Do wyświetlenie tabelek obok siebie użyłem ```Grid```:
```javascript
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
```
## Wykorzystałem tutaj następujące komponenty:
```javascript
import Grid from '@material-ui/core/Grid'; // Do wyświetlenia tabelek obok siebie
import Table from '@material-ui/core/Table'; // Do stworzenia tablicy
import TableBody from '@material-ui/core/TableBody'; // Do implementacji ciała tablicy
import TableCell from '@material-ui/core/TableCell'; // Do dodania kolumny
import TableContainer from '@material-ui/core/TableContainer'; //Do dodania shadowBoxa do tabelki
import TableHead from '@material-ui/core/TableHead'; // Do wyświetlenia nagłowkow
import Paper from '@material-ui/core/Paper'; //Do wyswietlenia efektu shadowBoxa
import TableRow from '@material-ui/core/TableRow'; // Do dodania wiersza
```

## Potrzebne do stworzenia tabeli komponenty(funkcja zwracająca obiekt oraz 2 tablice obiektów):
```javascript
function createData(miejsce, zawodnik, kraj, punkty) {
    return { miejsce, zawodnik, kraj, punkty };
  }

//tabela po prawej na stronie
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

//tabela po lewej na stronie
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
```

## Obiekty stylujące tabelki:
```javascript
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
```


## Tak przedstawia się komponent ```BasicTable```:
```javascript
function BasicTable() {
    const classes = useStyles();
    const classesTable = useStylesTable();
    return (
      <TableContainer component={Paper} className={classesTable.table}>//wykorzystanie komponentu Paper który działa jak shadowBox
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
```

## Tak przedstawia się komponent ```BasicTable2``` :

```javascript
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
```

# About
## Tak przedstawia się podstrona About:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab7/zrzuty/2.PNG)


## Stworzyłem tutaj listę oraz 2 checkboxy zmieniające tekst przy użyciu następujących komponentów:
```javascript
import List from '@material-ui/core/List'; // Do stworzenia listy
import ListItem from '@material-ui/core/ListItem'; // Do dodaniu itemu do listy
import ListItemText from '@material-ui/core/ListItemText'; // Do Wyswietlenia tekstu
import FormGroup from '@material-ui/core/FormGroup'; // Do wyswietlenia listy oraz checkboxow
import FormControlLabel from '@material-ui/core/FormControlLabel'; //Do wykonaniu eventów
import Checkbox from '@material-ui/core/Checkbox'; //Do dodania checkboxa
import Typography from '@material-ui/core/Typography';// Typography jako wyświetlenie nagłówka w liście
```

## Tak przedstawia się funkcja ```About()```:
```javascript
function About() {
    return (
        <InteractiveList></InteractiveList>
    )
}
```
## Tak przedstawia się komponent InteractiveList:
```javascript
function InteractiveList() {
    const [dense, setDense] = React.useState(false); // ------------------> Wykorzystanie React.useState do sprawdzania czy checkbox jest zaznaczony
    const [secondary, setSecondary] = React.useState(false);// ------------------> Wykorzystanie React.useState do sprawdzania czy checkbox jest zaznaczony
    return (
    <div  style={{// -----------------------------------------------> Własne style dla diva
        backgroundColor: 'rgb(241, 243, 247)',
        height:'100vh',
        overflow:'hidden',
        padding: '2rem 0 0 0'
      }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />// ---> Po zaznaczeniu/odznaczeniu checkboxa wywołana metoda
            }
            label="Zmniejsz rozmiar"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary} // ---> Jeśli jest wartość true to się pokaże dodatkowy tekst
                onChange={(event) => setSecondary(event.target.checked)} // ---> Po zaznaczeniu/odznaczeniu checkboxa wywołana metoda
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
```
## Tak wygląda strona po zaznaczeniu checkboxa **zmniejsz rozmiar**
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab7/zrzuty/3.PNG)

## Tak wygląda strona gdy zaznaczmy "Włącz dodatkowy opis":
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab7/zrzuty/4.PNG)

## Tak przedstawia się strona gdy oba checkboxy są zaznaczone:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab7/zrzuty/5.PNG)

# Content
## Tak przedstawia się podstrona ```Content```:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab7/zrzuty/6.PNG)

## Tak przedstawiała się na laboratorium nr 6:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/1.PNG)

## Można zauważyć, że dodana została tutaj Data. Korzystam z tego samego obiektu JSON, dodałem do niego atrybyt ``Data``.

Przykład 1 elementu w tablicy
```javascript
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
                data: "2009-04-21"      //-------------> o ten atrubut został poszerzony obiekt z lab nr 6
    
            },
```

## Do poprzedniego kodu z laboratorium nr 6 dodałem tutaj następujące komponenty z material UI:
```javascript
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'; //Do wyswietlenia ikonki kalendarza
import InputAdornment from '@material-ui/core/InputAdornment'; // Do wrzucenia ikonki z material UI
import Box from '@material-ui/core/Box'; // Do otrzymania efektu shadowBox
import {TextField} from '@material-ui/core'; Do stworzenia tekstu z data
```

## Tak przedstawia się funkcja ```Content()```:
```javascript
function Content() {
    return (
        <Box                   // ------------------>>>> Do stworzenia tego samego efektu co poprzedniu na lab6 przy wykorzystaniu Css, zastosowałem boxShadow Z materialUI.
            boxShadow={10}
            bgcolor="rgb(241, 243, 247)!important"
            style={{ width: '50%'}}
        >
            <FunctionalComp></FunctionalComp>
            <Parent></Parent>
      </Box>
    )
}
```

## Tak przedstawia się zmieniona klasa Child z lab nr 6:
```javascript
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
                                        <TextField ----------> do wyswietlenia daty w raz z ikonką kalendarza
                                            id="date"
                                            label="Data Wydania:"
                                            defaultValue={Book.data}
                                            className={Child.textField}
                                            InputLabelProps={{
                                            shrink: true, style:{fontSize:'1.3rem',color:'black', lineHeight:'35px',padding:'0px!important'},
                                            }}
                                            InputProps={{
                                                startAdornment: ( // Aby wyświetlić ikonkę po lewej stronie przed tekstem
                                                    <InputAdornment position="start"> //-----> tutaj wrzucam ikonke z material UI
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
```

## Reszta komponentów do wyświetlenia tej podstrony nie została zmieniona z laboratorium nr 6.
