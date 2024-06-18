/* eslint-disable react/prop-types */
const ActiveTeamsComponent = ({
  activeTeams,
  handleAddTeam,
  handleNameInput,
  handleScoreDecrease,
  handleScoreIncrease,
  handleTransfer,
  handleDelete,
}) => {
  return (
    <div>
      <h2>Active teams</h2>
      {activeTeams.length < 1 && (
        <div style={{ border: '2px solid green', width: '30vw' }}>
          Drop here
        </div>
      )}
      {activeTeams.length > 0 && (
        <ul>
          {activeTeams.map(
            (team, index) =>
              team.active && (
                <li key={index}>
                  <button type='button'>Drag</button>
                  <input
                    type='text'
                    value={team.name}
                    onChange={(e) => handleNameInput(e, index)}
                  />
                  <button
                    type='button'
                    onClick={() => handleScoreDecrease(index)}
                  >
                    -
                  </button>
                  <span>{activeTeams[index].score}</span>
                  <button
                    type='button'
                    onClick={() => handleScoreIncrease(index)}
                  >
                    +
                  </button>
                  <button type='button' onClick={() => handleTransfer(index)}>
                    Transfer
                  </button>
                  <button type='button' onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </li>
              ),
          )}
        </ul>
      )}
      <button type='button' onClick={handleAddTeam}>
        Add team
      </button>
    </div>
  );
};

export default ActiveTeamsComponent;
