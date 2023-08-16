import {useState} from 'react'

const GroupedTeamMembers = ({pokes, selectedTeam, setSelectedTeam}) => {


const [groupedPokes, setGroupedData] = useState(groupTeamMembers())

function groupTeamMembers()
  {
    var teams = []
    
    var teamAMembers = pokes.filter((poke)=>poke.teamName === 'TeamA')
    var teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA'?false:true}
    teams.push(teamA)

    var teamBMembers = pokes.filter((poke)=>poke.teamName === 'TeamB')
    var teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB'?false:true}
    teams.push(teamB)

    var teamCMembers = pokes.filter((poke)=>poke.teamName === 'TeamC')
    var teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC'?false:true}
    teams.push(teamC)

    var teamDMembers = pokes.filter((poke)=>poke.teamName === 'TeamD')
    var teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD'?false:true}
    teams.push(teamD)

    return teams
    
  }

function handleTeamClick(event){
  var transformedGroupData = groupedPokes.map((groupedData)=>
    groupedData.team === event.currentTarget.id ? {...groupedData, collapsed : !groupedData.collapsed} : groupedData)
  setGroupedData(transformedGroupData)
  setSelectedTeam(event.currentTarget.id)
}

    return (
        <main className = "container">
          {
            groupedPokes.map((item)=>{
                return(
            
                <div key = {item.team} className="card mt-2" style={{cursor: "pointer"}}>
                  <h4 id = {item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                  Team Name: {item.team}
                  </h4>
                <div id={"collapse" + item.team} className = {item.collapsed === true ? "collapse":""}>
                  
                <hr />
                {
                item.members.map((member) => {
                    return (
                    <div className="mt-2">
                    <h5 className="card-title mt-2">
                    <span className="text-dark">Name: {member.name}</span>
                    </h5>
                    <p>Type: {member.type1}</p>
                    </div>
                  )
                
                })
            }         
                </div>
                </div>
              )
        })
    }
            
          
      </main>
    )
}
          

export default GroupedTeamMembers