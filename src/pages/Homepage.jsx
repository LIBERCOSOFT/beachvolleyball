import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import TimerComponent from '../components/TimerComponent';
import ActiveTeamsComponent from '../components/ActiveTeamsComponent';
import EliminatedTeamsComponent from '../components/EliminatedTeamComponent';
import findTeam from '../utils/index.js';

const Homepage = () => {
  const [teams, setTeams] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleAddTeam = (type) => {
    setTeams((prevState) => [
      ...prevState,
      {
        id: uuid(),
        name: '',
        score: 0,
        active: type === 'active',
      },
    ]);
  };

  const handleNameInput = useCallback((event) => {
    const id = event.target.closest('li').dataset.teamid;
    const index = findTeam(teams, id);
    const newTeams = [...teams];
    newTeams[index].name = event.target.value;
    setTeams(newTeams);
  }, [setTeams, teams]);

  const handleScoreIncrease = useCallback((event) => {
    const id = event.target.closest('li').dataset.teamid;
    const index = findTeam(teams, id);
    const newTeams = [...teams];
    newTeams[index].score += 1;
    setTeams(newTeams);
  }, [setTeams, teams]);

  const handleScoreDecrease = useCallback((event) => {
    const id = event.target.closest('li').dataset.teamid;
    const index = findTeam(teams, id);
    const newTeams = [...teams];
    if (newTeams[index].score > 0) {
      newTeams[index].score -= 1;
    }
    setTeams(newTeams);
  }, [setTeams, teams]);

  const handleTransfer = useCallback((event) => {
    const id = event.target.closest('li').dataset.teamid;
    const index = findTeam(teams, id);
    const newTeams = [...teams];
    newTeams[index].active = !newTeams[index].active;
    setTeams(newTeams);
  }, [setTeams, teams]);

  const handleDelete = useCallback((event) => {
    const id = event.target.closest('li').dataset.teamid;
    const index = findTeam(teams, id);
    const newTeams = [...teams];
    newTeams.splice(index, 1);
    setTeams(newTeams);
  }, [setTeams, teams]);

  const handleDragStart = (id) => {
    const index = findTeam(teams, id);
    setDraggedIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleTransfer(draggedIndex);
    setDraggedIndex(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2em',
      }}
    >
      <TimerComponent />
      <ActiveTeamsComponent
        teams={teams.filter((team) => team.active)}
        handleAddTeam={handleAddTeam}
        handleNameInput={handleNameInput}
        handleScoreDecrease={handleScoreDecrease}
        handleScoreIncrease={handleScoreIncrease}
        handleTransfer={handleTransfer}
        handleDelete={handleDelete}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDragDrop={handleDrop}
      />
      <EliminatedTeamsComponent
        teams={teams.filter((team) => !team.active)}
        handleAddTeam={handleAddTeam}
        handleNameInput={handleNameInput}
        handleScoreDecrease={handleScoreDecrease}
        handleScoreIncrease={handleScoreIncrease}
        handleTransfer={handleTransfer}
        handleDelete={handleDelete}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDragDrop={handleDrop}
      />
    </div>
  );
};

export default Homepage;
