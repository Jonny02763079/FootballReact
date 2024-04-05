import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    name: string;
    url: string;
    isSelected?: boolean;
    onClick: Function;
}

export default function Button({ name, url, isSelected = false, onClick }: Props) {

    return (
        <>
            <Link to={`/${url}`} onClick={() => onClick()}>{name}</Link>
        </>
    );
}
