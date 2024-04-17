import Header from '../Components/Molekuls/Header'
import TableRowsUpcomingGames from '../Components/Molekuls/TableRowsUpcomingGames.tsx'
import { useEffect, useState } from 'react'
import { Data } from '../Components/Types/DataType.tsx'
import { DataUpcoming } from '../Components/Types/DataTypeUpcoming.tsx'
import Headline from '../Components/Molekuls/Headline.tsx'


function UpcomingGames() {

    const [fetchedGames, setFetchedGames] = useState<Data[]>([]);
    const [fetchedGamesTeams, setFetchedGamesTeams] = useState<Data[]>([]);
    const [fetchedGamesUpcoming, setFetchedGamesUpcoming] = useState<DataUpcoming[]>([]);
    const [Upcoming, setRenderedUpcoming] = useState<any>([]);

    useEffect(() => {
        const renderedTeams = fetchedGamesUpcoming.map(element => {
            return <TableRowsUpcomingGames teamData={element}></TableRowsUpcomingGames>
        })
        setRenderedUpcoming(renderedTeams)
    }, [fetchedGamesUpcoming])

    return (
        <>
            <div style={headerStyle}>
                <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
            </div>

            <div className='motherBox' style={contentStyle}>
                <div style={headlineStyle}>
                    <Headline></Headline>
                </div>
                <div>
                    {Upcoming}
                </div>

            </div>
        </>
    )
}

export default UpcomingGames

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

const headlineStyle: React.CSSProperties = {

}



