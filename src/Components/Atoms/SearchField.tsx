import React from 'react';

type Props = {
    searchFunction: (value: string) => void;
}

export default function SearchField({ searchFunction }: Props) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        searchFunction(value);
    };

    return (
        <>
            <input style={searchField}
                type="text"
                placeholder="Search Team"
                onChange={handleInputChange}
            />

        </>
    );
}

const searchField: React.CSSProperties = {
    border: '2px solid red',
    width: '300px',
    height: '40px'
}
