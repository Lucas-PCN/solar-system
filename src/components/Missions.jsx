import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missionBigDiv">
          {missions.map((e) => (
            <div key={ e.name } className="missionSmallDiv">
              <MissionCard
                name={ e.name }
                year={ e.year }
                country={ e.country }
                destination={ e.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
