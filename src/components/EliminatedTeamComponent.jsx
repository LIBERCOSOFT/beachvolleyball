const EliminatedTeamsComponent = ({
  teams,
  handleAddTeam,
  handleNameInput,
  handleScoreDecrease,
  handleScoreIncrease,
  handleTransfer,
  handleDelete,
  handleDragDrop,
  handleDragOver,
  handleDragStart,
}) => (
  <div style={{ padding: '10px', border: '1px solid black' }}>
    <h2>Eliminated</h2>
    <div
      onDragOver={handleDragOver}
      onDrop={handleDragDrop}
      id="eliminated"
    >
      {teams.length < 1 && (
        <div
          style={{ border: '2px solid green', width: '30vw' }}
          id="eliminated-1"
        >
          Drop here
        </div>
      )}
      {teams.length > 0 && (
        <ul>
          {teams.map(
            (team) => !team.active && (
              <li key={team.id} draggable data-teamid={team.id}>
                <button
                  type="button"
                  onDragStart={() => handleDragStart(team.id)}
                  onDragOver={handleDragOver}
                >
                  Drag
                </button>
                <input
                  type="text"
                  value={team.name}
                  onChange={handleNameInput}
                />
                <button
                  type="button"
                  onClick={handleScoreDecrease}
                >
                  -
                </button>
                <span>{team.score}</span>
                <button
                  type="button"
                  onClick={handleScoreIncrease}
                >
                  +
                </button>
                <button type="button" onClick={handleTransfer}>
                  Transfer
                </button>
                <button type="button" onClick={handleDelete}>
                  Delete
                </button>
              </li>
            )
          )}
        </ul>
      )}
      <button type="button" onClick={() => handleAddTeam('eliminated')}>
        Add team
      </button>
    </div>
  </div>
);

export default EliminatedTeamsComponent;
