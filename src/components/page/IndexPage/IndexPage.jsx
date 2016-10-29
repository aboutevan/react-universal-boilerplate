import React from 'react';
import AthletePreview from '../../presentation/AthletePreview/AthletePreview';
import athletes from '../../../data/athletes';

const IndexPage = () => (
  <div className="home">
    <div className="athletes-selector">
      <h1>helldo</h1>
      {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
    </div>
  </div>
);


export default IndexPage;
