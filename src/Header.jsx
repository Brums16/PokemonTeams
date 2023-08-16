const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className= "container bg-danger text-white">
          <div className = "row justify-content-center mt-3 mb-4">
            <div className = "col-8">
              <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} has {teamMemberCount} Pokemon!</h3>
          </div>
          </div>
        </header>
    )
}


export default Header