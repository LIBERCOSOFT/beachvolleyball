import { useRef, useEffect, useState } from 'react';

const ActiveTeamsComponent = ({
  teams,
  handleAddTeam,
  handleNameInput,
  handleScoreDecrease,
  handleScoreIncrease,
  handleTransfer,
  handleDelete,
  handleDragStart,
  handleDragOver,
  handleDragDrop,
}) => {
  const myListRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (myListRef.current === null) {
      setIsEmpty(true);
    } else if (myListRef.current.getElementsByTagName('li').length < 1) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [teams]);

  return (
    <div style={{ padding: '10px', border: '1px solid black' }}>
      <h2>Active teams</h2>
      <div
        onDragOver={handleDragOver}
        onDrop={(e) => handleDragDrop(e)}
        id='active'
      >
        {isEmpty && (
          <div
            style={{ border: '2px solid green', width: '30vw' }}
            id='active-1'
          >
            Drop here
          </div>
        )}
        {teams.length > 0 && (
          <ul ref={myListRef}>
            {teams.map(
              (team, index) =>
                team.active && (
                  <li key={index} draggable>
                    <button
                      type='button'
                      onDragStart={handleDragStart(index)}
                      onDragOver={handleDragOver}
                    >
                      Drag
                    </button>
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
                    <span>{teams[index].score}</span>
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
      </div>
      <button type='button' onClick={() => handleAddTeam('active')}>
        Add team
      </button>
    </div>
  );
};

export default ActiveTeamsComponent;
