import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header.jsx'
import Pokes from './Pokes.jsx'
import Footer from './Footer.jsx';
import './App.css';
import {useState} from 'react';
import charizard from './images/charizard.jpg'
import pikachu from "./images/pikachu.png"
import filler from "./images/400x400.png"



function App() {


const [selectedTeam, setSelectedTeam] = useState("TeamA")
const [pokes, setPokes] = useState([{
    id: 1,
    name: "Charizard",
    type1: "Fire",
    pic: charizard,

    teamName: "TeamA"
  },{
    id: 2,
    name: "Venusaur",
    type1: "Grass",
    pic: filler,
    teamName: "TeamB"
  },{
    id: 3,
    name: "Blastoise",
    type1: "Water",
    pic: filler,
    teamName: "TeamC"
  },{
    id: 4,
    name: "Pikachu",
    type1: "Electric",
    pic: pikachu,
    teamName: "TeamA"
  },{
    id: 5,
    name: "Pidgeot",
    type1: "Flying",
    pic: filler,
    teamName: "TeamA"
  },{
    id: 6,
    name: "Alakazam",
    type1: "Pyschic",
    pic: filler,
    teamName: "TeamD"
  },{
    id: 7,
    name: "Machamp",
    type1: "Fighting",
    pic: filler,
    teamName: "TeamC"
  },{
    id: 8,
    name: "Sandslash",
    type1: "Ground",
    pic: filler,
    teamName: "TeamA"
  },{
    id: 9,
    name: "Golem",
    type1: "Rock",
    pic: filler,
    teamName: "TeamD"
  },{
    id: 10,
    name: "Cloyster",
    type1: "Water",
    pic: filler,
    teamName: "TeamC"
  },{
    id: 11,
    name: "Meowth",
    type1: "Normal",
    pic: filler,
    teamName: "TeamB"
  },{
    id: 12,
    name: "Gengar",
    type1: "Ghost",
    pic: filler,
    teamName: "TeamC"
  }])

function handleTeamSelectionChange(event){
  console.log(event.target.value)
  setSelectedTeam(event.target.value)
}

function handlePokeCardClick(event){
  const transformedPokes = pokes.map((poke) => poke.id === parseInt(event.currentTarget.id) ? 
    (poke.teamName === selectedTeam)?{...poke, teamName:''}:{...poke, teamName: selectedTeam}:poke)
  setPokes(transformedPokes)
}  


  return (
    <div className="App">
   <Header />
   <Pokes pokes={pokes} 
     selectedTeam={selectedTeam}
     handlePokeCardClick = {handlePokeCardClick} 
     handleTeamSelectionChange = {handleTeamSelectionChange}/>
   <Footer />
     </div>
  );
}

export default App;