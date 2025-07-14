# Lab 8 – React - aplikacja nr 2 + analiza kodu źródłowego + git difftool.
## Źródło
https://zacniewski.gitlab.io/teaching/2020-serwisy-www/

# Do wykonania laboratorium wykorzystałem następujący przykład:
https://reactjsexample.com/the-easiest-way-to-slide-react-routes/ a w nim wykorzystałem drugi przykład: https://reactjsexample.com/a-react-custom-hook-for-creating-flexible-and-accessible-expand-collapse/. Krótko mówiąc na podstronie home znajduję się paragraf z tekstem z użyciem **react-collapsed** a przy zmianie stron wykonywane są animację, które pokaże później.

## Tak Przedstawia się gotowy projekt:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/1.PNG)
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/2.PNG)
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/3.PNG)
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/4.PNG)

## Dzięki wykorzystaniu SlideRoutes udało się otrzymać aniamcje gdy zmieniamy stronę:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/Lab8%20Animacja.gif)


## lista niezbędnych importów:
```javascript
import React,{useState} from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import { Button, Card } from 'react-bootstrap';
```
## lista potrzebnych modułów:
- react-router-dom
- react-collapsed
- react-slide-routes
- react-bootstrap

## Tak przedstawia się kod app.js:
```javascript
import React,{useState} from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import { Button, Card } from 'react-bootstrap';


/* Tworzenie funckji dla React Routera */
const Home = () => 
  <div className="home test">
      <CollapseText></CollapseText>
  </div>;
const About = () => 
  <div className="about test">
    <AboutUs></AboutUs>
  </div>;
const Contact = () => 
  <div className="contact test">
      <ContactUs></ContactUs>
  </div>;


/*Główny komponent*/
const App = () => {
  const location = useLocation();
  return (
    <>
      <nav>
        <NavLink to="/" exact> /*Wykorzystanie React NavLink do pasa nawigacji*/
          Home
        </NavLink>
        <NavLink to="/about">LoremIpsum</NavLink>
        <NavLink to="/contact">LoremIpsumCD</NavLink>
      </nav>

      <SlideRoutes location={location} duration={500}> /*Wykorzystanie SliedRoutes do wykonania animacji pomiędzy przejściami stron */
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
    </>
  );
};

function CollapseText() {
  /*Sprawdzanie czy przycisk został naciśnięty następnie wykonanie*/
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
 /*Tutaj został zwrócony Div a wnim element Card w którym będzie przechowywany nasz paragraf*/
  return (
    <div>
      <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto',fontSize:'150%',lineHeight:'35px',fontFamily:'sans-serif',paddingTop:'3rem'}}>
        <Card.Header>Lorem Ipsum</Card.Header>
        <Card.Body>
          <Button 
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),// po naciśnięciu albo pokazuję się element albo ukrywa
              })}
              
            >
              {isExpanded ? 'Ukryj' : 'Pokaż'}
            </Button>
            <p {...getCollapseProps()}>
              Sed fringilla vulputate enim, nec tincidunt magna. Cras in ipsum sit amet est vehicula aliquam. 
              Nam quis nulla ullamcorper, commodo diam id, fringilla mi. Praesent tristique felis vel dui varius, 
              sit amet aliquam leo vehicula. Cras a velit eget dui malesuada ullamcorper in quis magna. Pellentesque 
              aliquam est sit amet velit suscipit, eu iaculis lectus euismod. Duis euismod nulla eget lectus elementum, 
              eget posuere nulla interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus 
              ut porta augue. Proin ultricies mi vel lectus pellentesque, varius finibus purus aliquet. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Ut pellentesque facilisis elit cursus scelerisque. Nullam ultricies commodo augue vel aliquet. 
              Nunc quis pharetra lacus, at laoreet ipsum. Sed tempus dapibus nisi lacinia molestie.
            </p>
        </Card.Body>
      </Card>
    </div>
  );
}

/*komponent funkcyjny dla LoremIpsum*/
/*Zwrócenie Diva a wraz z paragrafem, w którym jest tekst*/
function ContactUs() {
  return (
    <div>
      <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto',fontSize:'150%',lineHeight:'35px',fontFamily:'sans-serif',paddingTop:'3rem'}}>
        <Card.Header>Lorem Ipsum</Card.Header>
        <Card.Body>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam quam, finibus sed consectetur eget, cursus ut justo. 
            Quisque ut sem a mi gravida aliquet. Maecenas iaculis leo ac metus cursus, in porta sem aliquam. Nunc ornare commodo metus ut 
            bibendum. Sed pharetra nisi non bibendum vestibulum. Cras nec lorem orci. Aliquam dictum nunc ullamcorper, suscipit dui a, 
            finibus purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam elit lorem, 
            accumsan a tincidunt sit amet, eleifend vel augue. Nunc sagittis mauris in turpis gravida feugiat. Nulla viverra tempor n
            ibh, ac porta leo malesuada at. Curabitur finibus sem nisl, nec placerat purus tempus 
            fringilla. Aenean sagittis et purus id venenatis. Pellentesque maximus malesuada leo sit amet tristique. 
            Aenean augue velit, viverra ut sem dignissim, egestas tempor erat.
            </p>
        </Card.Body>
      </Card>
    </div>
  );
}

/*komponent funkcyjny dla LoremIpsumCD*/
/*Zwrócenie Diva a wraz z paragrafem, w którym jest tekst*/
function AboutUs() {
  return (
    <div>
      <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto',fontSize:'150%',lineHeight:'35px',fontFamily:'sans-serif',paddingTop:'3rem'}}>
        <Card.Header>Lorem Ipsum</Card.Header>
        <Card.Body>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
             Nulla semper leo quis ullamcorper interdum. 
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Quisque gravida interdum urna a condimentum. Pellentesque 
             elementum libero id leo malesuada, et tristique tortor lobortis. 
             Ut volutpat mattis est maximus porttitor. Nunc ac erat at dui 
             malesuada aliquet. Nullam consectetur quam nec elit suscipit, 
             suscipit sodales arcu lacinia. Nullam aliquet, metus ac imperdiet 
             rutrum, augue lectus aliquam elit, at sollicitudin justo est quis 
             purus. Nulla facilisi. Quisque urna nisl, lobortis eu mauris id, 
             vehicula auctor tellus. In vitae risus nisl. Cras sodales, metus 
             id tincidunt suscipit, justo arcu porttitor elit, nec aliquet eros nisl id sapien.
            </p>
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
```

# Praca z Git DiffTool

## Za pomocą polecenia w konsoli git log najpierw sprawdzam commity. Później za pomocą polecenia git diff podaje sprawdzone commity i w rezultacie otrzymuje różnicę pomiędzy nimi:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/5.PNG)

## Za pomocą polecenia git difftool sprawdzam jakie dane zostały dodane od commita z lab7 do commita z lab8:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/7.PNG)

## Jeśli wybierzemy podgląd (opcja y) to wyświetli nam się poniższe okno z informacją o tym co dodano:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab8/my-app/lab8/zrzuty/6.PNG)
