import React from 'react'

export default function Headline() {
    return (
        <div style={divStyleRows}>
            <div className="">Logo</div>
            <div className="">Team Name 1</div>
            <div className="">Score Team 1</div>
            <div className="">VS</div>
            <div className="">Score Team 2</div>
            <div className="">Team Name 2</div>
            <div className="">Logo</div>
        </div>
    )
}

const divStyleRows: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr) 1fr repeat(3, 1fr)',
    gap: '5px',
    alignItems: 'center',
    justifyItems: 'center',
    marginBottom: '30px',
    border: '4px red solid',
    fontSize: '18px',
    fontWeight: 'bold',

};
