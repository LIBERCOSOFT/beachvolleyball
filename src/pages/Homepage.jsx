import { useState } from 'react';
// import TimerComponent from '../components/TimerComponent';
import ActiveTeamsComponent from '../components/ActiveTeamsComponent';

const Homepage = () => {
  // Active Teams Component
  const [activeTeams, setActiveTeams] = useState([]);

  const handleAddTeam = () => {
    setActiveTeams([
      ...activeTeams,
      {
        name: '',
        score: 0,
      },
    ]);
  };

  const handleNameInput = (e, index) => {
    const newTeams = [...activeTeams];
    newTeams[index].name = e.target.value;
    setActiveTeams(newTeams);
  };

  const handleScoreIncrease = (index) => {
    const newTeams = [...activeTeams];
    newTeams[index].score += 1;
    setActiveTeams(newTeams);
  };

  const handleScoreDecrease = (index) => {
    const newTeams = [...activeTeams];
    if (newTeams[index].score > 0) {
      newTeams[index].score -= 1;
    }
    setActiveTeams(newTeams);
  };

  // Eliminated Teams Component

  return (
    <>
      {/* <TimerComponent /> */}
      <ActiveTeamsComponent
        activeTeams={activeTeams}
        handleAddTeam={handleAddTeam}
        handleNameInput={handleNameInput}
        handleScoreDecrease={handleScoreDecrease}
        handleScoreIncrease={handleScoreIncrease}
      />
    </>
  );
};

export default Homepage;
