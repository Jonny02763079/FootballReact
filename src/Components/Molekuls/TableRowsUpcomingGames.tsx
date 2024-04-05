//import React from 'react'
import { DataUpcoming } from '../Types/DataTypeUpcoming.tsx'

type Props = {
    teamData: DataUpcoming;
};

const teamIcon: React.CSSProperties = {
    width: '50px',
    height: '50px'
}

export default function TableRowsTeams({ teamData }: Props) {
    return (
        <div className='grid-container' style={divStyleRows}>
            <div className="team-icon" style={teamIcon}>
                <img src={teamData.team1.teamIconUrl} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <>{console.log(teamData.team1.teamName)}</>
            <div className="team-name">{teamData.team1.teamName}</div>
            <div className="match-results">-</div>
            <div className="separator">vs</div>
            <div className="match-results">-</div>
            <div className="team-name">{teamData.team2.teamName}</div>
            <div className="team-icon" style={teamIcon}>
                <img src={teamData.team2.teamIconUrl} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    )
}

const divStyleRows: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr) 1fr repeat(3, 1fr)',
    gap: '5px',
    alignItems: 'center',
    justifyItems: 'center'
};
