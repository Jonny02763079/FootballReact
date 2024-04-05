//import React from 'react'
import { Data } from '../Types/DataType.tsx';

type Props = {
  teamData: Data;
};

const teamIcon: React.CSSProperties = {
  width: '50px',
  height: '50px'
}

const result1 = (teamData: Data): number | undefined => {
  let score: number | undefined;
  teamData.goals.forEach(element => {
    if (element.isOvertime === true) {
      score = element.scoreTeam1;
    }
  });
  return score;
};


const result2 = (teamData: Data): number | undefined => {
  let score: number | undefined;
  teamData.goals.forEach(element => {
    if (element.isOvertime === true) {
      score = element.scoreTeam2;
      console.log(score);

    }
  });
  return score;
};


export default function TableRows({ teamData }: Props) {

  const result1Value = result1(teamData);
  const result2Value = result2(teamData);

  return (

    <div className='grid-container' style={divStyleRows}>
      <div className="team-icon" style={teamIcon}>
        <img src={teamData.team1.teamIconUrl} alt="" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* <>{console.log(teamData.team1.teamName)};</> */}
      <div className="team-name">{teamData.team1.teamName}</div>
      <div className="match-results">{result1Value}</div>
      <div className="separator">vs</div>
      <div className="match-results">{result2Value}</div>
      <div className="team-name">{teamData.team2.teamName}</div>
      <div className="team-icon" style={teamIcon}>
        <img src={teamData.team2.teamIconUrl} alt="" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

const divStyleRows: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr) 1fr repeat(3, 1fr)',
  gap: '5px',
  alignItems: 'center',
  justifyItems: 'center'
};

