/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';

const EliminatedTeamsComponent = ({
  teams,
  handleAddTeam,
  handleNameInput,
  handleScoreDecrease,
  handleScoreIncrease,
  handleTransfer,
  handleDelete,
}) => {
  const ulRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (ulRef.current === null) {
      setIsEmpty(true);
    } else if (ulRef.current.getElementsByTagName('li').length < 1) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [teams]);

  return (
    <div>
      <h2>Eliminated</h2>
      {isEmpty && (
        <div style={{ border: '2px solid green', width: '30vw' }}>
          Drop here
        </div>
      )}
      {teams.length > 0 && (
        <ul ref={ulRef}>
          {teams.map(
            (team, index) =>
              !team.active && (
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
      <button type='button' onClick={() => handleAddTeam('eliminated')}>
        Add team
      </button>
    </div>
  );
};

export default EliminatedTeamsComponent;
