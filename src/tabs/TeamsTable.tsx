import Header from '../Components/Molekuls/Header'
import { useEffect, useState } from 'react'
import { Data } from '../Components/Types/DataType.tsx'
import { DataUpcoming } from '../Components/Types/DataTypeUpcoming.tsx'
import TableRowsTeams from '../Components/Molekuls/TableRowsTeams.tsx'
import { DataTeams } from '../Components/Types/DataTypeTeams.tsx'
import Headline from '../Components/Molekuls/Headline.tsx'


function TeamsTable() {

    const [fetchedGames, setFetchedGames] = useState<Data[]>([]);
    const [fetchedGamesTeams, setFetchedGamesTeams] = useState<DataTeams[]>([]);
    const [fetchedGamesUpcoming, setFetchedGamesUpcoming] = useState<DataUpcoming[]>([]);
    const [Teams, setRenderedTeams] = useState<any>([]);

    useEffect(() => {
        const renderedTeams = fetchedGamesTeams.map(element => {
            return <TableRowsTeams teamData={element}></TableRowsTeams>
        })
        setRenderedTeams(renderedTeams)
    }, [fetchedGamesTeams])

    return (
        <>
            <div style={headerStyle}>
                <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>

            </div>
            <div className='motherBox' style={contentStyle}>
                <div>
                    <Headline></Headline>
                </div>
                <div>
                    {Teams}
                </div>

            </div>


        </>
    )
}

export default TeamsTable

const headerStyle: React.CSSProperties = {
    backgroundColor: 'black',
    width: '100%',
    position: 'fixed',
    height: '200px',
    zIndex: '100',
    border: '4px',
    borderStyle: 'solid',
    borderColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const contentStyle: React.CSSProperties = {
    paddingTop: '230px',
}


