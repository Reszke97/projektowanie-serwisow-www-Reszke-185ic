import './App.css';
//import FunctionalComp from './components/FunctionalComponent'
//import ClassComp from './components/ClassComponent'
import React from 'react'
import arthas from './images/arthas.jpg';
import illidan from './images/illidan.jpg';
import fale from './images/fale ciemnosci.jpg';
//app .js jest głownym komponentem który zostaje wyrenderowany do DOM
//app .js functional komponent
//Default importa mozna nazwać jak się chce
function App() {
    return (
        <div className="shadowBox">
            <FunctionalComp></FunctionalComp>
            <Parent></Parent>
        </div>      
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
                cena: "40 pln"
    
            },
            {
                id:2,
                tytul:"Illidan",
                autor:"William King",
                liczbaStron: 414,
                gatunek: "Fantasy",
                uniwersum: "Warcraft",
                image: illidan,
                cena: "40 pln"
            },
            {
                id:3,
                tytul:"Fale ciemności",
                autor:"Aaron Rosenberg",
                liczbaStron: 324,
                gatunek: "Fantasy",
                uniwersum: "Warcraft",
                image: fale,
                cena: "40 pln"
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
                                <span>Liczba stron: {Book.liczbaStron} </span>
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
            document.querySelectorAll(".bookdiv")[key-1].style.fontSize = "1.3rem"
        }
        else{
            document.querySelectorAll(".spanCena")[key-1].style.display = "block"
            document.querySelectorAll(".spanCena")[key-1].className = "spanCena text-warning"
            document.querySelectorAll(".bookdiv")[key-1].style.fontSize = "1.54rem"
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