import Header from '../Components/Molekuls/Header.tsx'
import TableRows from '../Components/Molekuls/TableRows.tsx'
import { useEffect, useState } from 'react'
import { Data } from '../Components/Types/DataType.tsx'
import { DataUpcoming } from '../Components/Types/DataTypeUpcoming.tsx'
import { log } from 'console'
import Headline from '../Components/Molekuls/Headline.tsx'


function TableGames() {

  const [fetchedGames, setFetchedGames] = useState<Data[]>([]);
  const [fetchedGamesTeams, setFetchedGamesTeams] = useState<Data[]>([]);
  const [fetchedGamesUpcoming, setFetchedGamesUpcoming] = useState<DataUpcoming[]>([]);
  const [Games, setRenderedGames] = useState<any>([]);

  useEffect(() => {
    const renderedTeams = fetchedGames.map(element => {
      return <TableRows teamData={element}></TableRows>
    })
    setRenderedGames(renderedTeams)
  }, [fetchedGames])

  return (
    <>
      <div className='header' style={headerStyle}>
        <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
      </div>
      <div className='motherBox' style={contentStyle}>
        <div>
          <Headline></Headline>
        </div>
        <div>
          {Games}
        </div>

      </div>

    </>
  )
}

export default TableGames

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

