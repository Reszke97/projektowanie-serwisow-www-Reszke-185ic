import React,{useState} from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import { Button, Card } from 'react-bootstrap';

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

const App = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about">LoremIpsum</NavLink>
        <NavLink to="/contact">LoremIpsumCD</NavLink>
      </nav>

      <SlideRoutes location={location} duration={500}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
    </>
  );
};

function CollapseText() {
  // Zmienne z pakiet react-collapsed można zmienić nazwy zmiennych boolen czyli np isExpanded natomiast nazwy funkcji muszą pozostać takie same 
  // w innym wypadku pojawia się błąd nie znalezienia fukcji
  // fukcja spradza czy przycisk został naciśnięty następnie wykonuje się na wybranym elemncie
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
  // Zwracany div
  // Dodałem elemet Card z react-bootstrap dla ładnejszego wyglądu oraz zmieniłem gotowe przyciski na przyciski z bootstrapa
  return (
    <div>
      <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto',fontSize:'150%',lineHeight:'35px',fontFamily:'sans-serif',paddingTop:'3rem'}}>
        <Card.Header>Lorem Ipsum</Card.Header>
        <Card.Body>
          <Button 
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
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