import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solarSystem">
          {planets.map((e) => (
            <PlanetCard key={ e.name } planetName={ e.name } planetImage={ e.image } img={ e.name } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
