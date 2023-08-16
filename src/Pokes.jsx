import { useState } from "react";


const Pokes = ({pokes,selectedTeam,handlePokeCardClick,handleTeamSelectionChange}) => {
  
   return (
    <main className="container">
      <div className = "row justify-content-center mt-3 mb-3">
    <div className = "col-6">
      <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
      </select>
      </div>
      </div>
    <div className = "row justify-content-center mt-3 mb-3">
    <div className = "col-8">
    <div className = "card-collection">
      {
        pokes.map((poke) => (
          <div id={poke.id} onClick = {handlePokeCardClick} className={(poke.teamName === selectedTeam ?'card m-2 standout':'card m-2')} style={{cursor: "pointer"}}>
          <img src={poke.pic} className="card-img-top" />
          <div className="card-body">
          <h5 className="card-title">Name: {poke.name}</h5>
          <p className="card-text"><b>Type: {poke.type1}</b></p>
          </div>
            </div>
          
          
          
        ))
      }



      </div>
    </div>
    </div>
    
    </main>
  )
                                                                    
}






export default Pokes