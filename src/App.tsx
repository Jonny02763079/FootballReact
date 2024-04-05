import React from 'react'
import TableGames from './tabs/TableGames'
import TeamsTable from './tabs/TeamsTable';
import UpcomingGames from './tabs/UpcomingGames';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/teams",
    element: <TeamsTable></TeamsTable>,
  },
  {
    path: "/",
    element: <TableGames></TableGames>,
  },
  {
    path: "/upcoming",
    element: <UpcomingGames></UpcomingGames>,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div style={contentStyle}>
        <TableGames></TableGames>
      </div> */}


    </>
  );
}

export default App;

const contentStyle: React.CSSProperties = {

}





