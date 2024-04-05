import React, { useEffect, useState } from 'react'
import SearchField from '../Atoms/SearchField'
import Button from '../Atoms/Button';
import { Data } from '../Types/DataType.tsx'
import { DataTeams } from '../Types/DataTypeTeams.tsx'
import { DataUpcoming } from '../Types/DataTypeUpcoming.tsx';
import TeamsTable from '../../tabs/TeamsTable';
import TableGames from '../../tabs/TableGames';
import UpcomingGames from '../../tabs/UpcomingGames';
import { log } from 'console';
import { match } from 'assert';

type Props = {
    setDataFetched: Function;
    setDataFetchedTeams: Function;
    setDataFetchedUpcoming: Function;
}


export default function Header({ setDataFetched, setDataFetchedTeams, setDataFetchedUpcoming }: Props) {


    const [data, setData] = useState<Data[]>([]);
    const [dataTeams, setDataTeams] = useState<DataTeams[]>([]);
    const [dataUpcoming, setDataUpcoming] = useState<DataUpcoming[]>([]);
    const [filteredData, setFilteredData] = useState<Data[]>([]);
    const [filteredTeams, setFilteredTeams] = useState<DataTeams[]>([]);
    const [filteredDataUpcoming, setFilteredDataUpcoming] = useState<DataUpcoming[]>([]);
    const currentDate = new Date();


    useEffect(() => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/")
            .then(response => response.json())
            .then((data: Data[]) => {
                const filteredData: Data[] = data.filter((element: Data) => {
                    //console.log(element.matchIsFinished);
                    return element.matchIsFinished === true;
                });
                console.log(filteredData);

                setData(filteredData)
                setFilteredData(filteredData)
                setDataFetched(filteredData)

            })

        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then(response => response.json())
            .then((data: DataTeams[]) => {
                setDataTeams(data)
                setFilteredTeams(data)
                setDataFetchedTeams(data)

            })

        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/")
            .then(response => response.json())
            .then((data: DataUpcoming[]) => {
                const filteredUpcoming: DataUpcoming[] = data.filter((element: DataUpcoming) => {
                    //console.log(element.matchIsFinished);
                    return element.matchIsFinished === false;
                });

                //console.log(filteredUpcoming);

                setDataUpcoming(filteredUpcoming)
                setFilteredDataUpcoming(filteredUpcoming);
                setDataFetchedUpcoming(filteredUpcoming)
            })
    }, []);

    useEffect(() => {
        setDataFetched(filteredData);
        //console.log(filteredData);

    }, [filteredData])

    useEffect(() => {
        setDataFetchedUpcoming(filteredDataUpcoming);
        console.log(filteredDataUpcoming);

    }, [filteredDataUpcoming])

    useEffect(() => {
        setDataFetchedTeams(filteredTeams);
        //console.log(filteredTeams);

    }, [filteredTeams])

    function SearchInput(value: string) {

        if (value.trim() === "") {
            setFilteredData(data)
            setFilteredTeams(dataTeams)
            setFilteredDataUpcoming(dataUpcoming)
        }

        console.log(value);
        const filteredTable = data.filter(
            element => (element.team1.teamName.toLowerCase().startsWith(value.toLowerCase()) || element.team2.teamName.toLowerCase().startsWith(value.toLowerCase())) && (element.matchIsFinished === true)
        );
        setFilteredData(filteredTable);

        const filteredTeams = dataTeams.filter(
            element => element.teamName.toLowerCase().startsWith(value.toLowerCase())
        );
        //console.log(filteredTeams);
        setFilteredTeams(filteredTeams)

        const filteredTableUpcoming = dataUpcoming.filter(
            element => (element.team1.teamName.toLowerCase().startsWith(value.toLowerCase()) || element.team2.teamName.toLowerCase().startsWith(value.toLowerCase())) && (element.matchIsFinished === false)
        );
        setFilteredDataUpcoming(filteredTableUpcoming);
    }

    return (
        <>
            <SearchField searchFunction={SearchInput}></SearchField>
            {/* <div>Header</div> */}
            <div><img src="../../Img/bundesliga-2-1.webp" alt="" /></div>
            {/* <Button name="Teams" ></Button>
            <Button name="Games" ></Button>
            <Button name="Upcoming Games" ></Button> */}

        </>
    )
}
