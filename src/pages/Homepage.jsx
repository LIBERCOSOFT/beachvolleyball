import { useState } from 'react';
import TimerComponent from '../components/TimerComponent';
import ActiveTeamsComponent from '../components/ActiveTeamsComponent';
import EliminatedTeamsComponent from '../components/EliminatedTeamComponent';

const Homepage = () => {
  const [teams, setTeams] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleAddTeam = (type) => {
    setTeams([
      ...teams,
      {
        name: '',
        score: 0,
        active: type === 'active' ? true : false,
      },
    ]);
  };

  const handleNameInput = (e, index) => {
    const newTeams = [...teams];
    newTeams[index].name = e.target.value;
    setTeams(newTeams);
  };

  const handleScoreIncrease = (index) => {
    const newTeams = [...teams];
    newTeams[index].score += 1;
    setTeams(newTeams);
  };

  const handleScoreDecrease = (index) => {
    const newTeams = [...teams];
    if (newTeams[index].score > 0) {
      newTeams[index].score -= 1;
    }
    setTeams(newTeams);
  };

  const handleTransfer = (index) => {
    const newTeams = [...teams];
    newTeams[index].active = !newTeams[index].active;
    setTeams(newTeams);
  };

  const handleDelete = (index) => {
    const newTeams = [...teams];
    newTeams.splice(index, 1);
    setTeams(newTeams);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

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
        teams={teams}
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
        teams={teams}
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
