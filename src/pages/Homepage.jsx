import { useState } from 'react';
// import TimerComponent from '../components/TimerComponent';
import ActiveTeamsComponent from '../components/ActiveTeamsComponent';

const Homepage = () => {
  const [teams, setTeams] = useState([]);

  const handleAddTeam = () => {
    setTeams([
      ...teams,
      {
        name: '',
        score: 0,
        active: true,
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

  // Eliminated Teams Component

  return (
    <>
      {/* <TimerComponent /> */}
      <ActiveTeamsComponent
        activeTeams={teams}
        handleAddTeam={handleAddTeam}
        handleNameInput={handleNameInput}
        handleScoreDecrease={handleScoreDecrease}
        handleScoreIncrease={handleScoreIncrease}
        handleTransfer={handleTransfer}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Homepage;
