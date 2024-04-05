//import React from 'react'
import { DataTeams } from '../Types/DataTypeTeams.tsx'

type Props = {
    teamData: DataTeams;
};

const divStyleRows: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
};

const imgDiv: React.CSSProperties = {
    width: '50px',
    height: '50px'
}

const teamInfoStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '10px'
}

const gridContainer: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
    textAlign: 'center'
}

const goalsStyle: React.CSSProperties = {
    textAlign: 'center'
}

export default function TableRowsTeams({ teamData }: Props) {
    return (

        <div className="team-container" style={divStyleRows}>
            <div className='imgDiv' style={imgDiv}>
                <img src={teamData.teamIconUrl} alt="" style={{ width: '100%', height: '100%' }} />
            </div>

            <div className="team-info" style={teamInfoStyle}>
                <div>{teamData.teamName}</div>
                <div>{teamData.matches}</div>
                <div>{teamData.points}</div>
                <div>{teamData.goals}</div>
            </div>
            <div className="grid-container" style={gridContainer}>
                <div>{teamData.won}</div>
                <div>{teamData.lost}</div>
                <div>{teamData.draw}</div>
            </div>
            <div style={goalsStyle}>{teamData.goalDiff}</div>
        </div>
    );
}

