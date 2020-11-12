import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BasicTab = (props) => {
    const {champion, updateChampion} = props;

    const [charName, setCharName] = useState(champion.name);

    useEffect(() => {
        updateChampion("name",charName);
    },[charName]);

    return (
        <div>
            <p>Champion Name:</p>
            <input id="name" type="text" value={charName} onChange={(e) => setCharName(e.target.value)} />
        </div>
    )
}

export default BasicTab;