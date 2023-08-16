import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header.jsx'
import Pokes from './Pokes.jsx'
import Footer from './Footer.jsx'
import GroupedTeamMembers from './GroupedTeamMembers.jsx'
import Nav from './Nav.jsx'
import NotFound from './NotFound.jsx'
import './App.css';
import {useState, useEffect} from 'react';
import charizard from './images/charizard.jpg'
import pikachu from "./images/pikachu.png"
import alakazam from "./images/alakazam.jpeg"
import blastoise from "./images/blastoise.png"
import cloyster from "./images/cloyster.jpg"
import gengar from "./images/gengar.jpg"
import golem from "./images/golem.png"
import machamp from "./images/machamp.png"
import pidgeot from "./images/pidgeot.png"
import sandslash from "./images/sandslash.jpg"
import venusaur from "./images/venusaur.png"
import meowth from "./images/meowth.jpeg"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'




function App() {


const [selectedTeam, setSelectedTeam] = useState("TeamB")
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
    pic: venusaur,
    teamName: "TeamB"
  },{
    id: 3,
    name: "Blastoise",
    type1: "Water",
    pic: blastoise,
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
    pic: pidgeot,
    teamName: "TeamA"
  },{
    id: 6,
    name: "Alakazam",
    type1: "Pyschic",
    pic: alakazam,
    teamName: "TeamD"
  },{
    id: 7,
    name: "Machamp",
    type1: "Fighting",
    pic: machamp,
    teamName: "TeamC"
  },{
    id: 8,
    name: "Sandslash",
    type1: "Ground",
    pic: sandslash,
    teamName: "TeamA"
  },{
    id: 9,
    name: "Golem",
    type1: "Rock",
    pic: golem,
    teamName: "TeamD"
  },{
    id: 10,
    name: "Cloyster",
    type1: "Water",
    pic: cloyster,
    teamName: "TeamC"
  },{
    id: 11,
    name: "Meowth",
    type1: "Normal",
    pic: meowth,
    teamName: "TeamB"
  },{
    id: 12,
    name: "Gengar",
    type1: "Ghost",
    pic: gengar,
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

      <Router>
        <Nav />
   <Header selectedTeam={selectedTeam} 
     teamMemberCount={pokes.filter((poke)=>poke.teamName === selectedTeam).length} />
        <Routes>
          <Route path = "/" element={<Pokes pokes={pokes} 
     selectedTeam={selectedTeam}
     handlePokeCardClick = {handlePokeCardClick} 
     handleTeamSelectionChange = {handleTeamSelectionChange}/>}>
   </Route>
          <Route path = "/GroupedTeamMembers" element={<GroupedTeamMembers 
                                                         pokes={pokes}
                                                         selectedTeam={selectedTeam}
                                                         setSelectedTeam={setSelectedTeam}
                                                         
                                                         
                                                         />}>
          
          </Route>
          <Route path = "*" element={<NotFound />}>
            </Route>
        </Routes>
          <Footer />
        </Router>
   
  );
}

export default App;