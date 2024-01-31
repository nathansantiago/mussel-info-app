import { useState } from 'react';
import MusselEntry from './MusselEntry.js';

function MusselList () {
    const [entries, setEntries] = useState([
        {
            name: "mussel1",
            text: "This is the first mussel."
        },
        {
            name: "mussel2",
            text: "This is the second mussel."
        }
    ]);

    return (
        <div className="mussel-list">
            {entries.map(entry => (
                <MusselEntry
                entry={entry}
                />
            ))}
        </div>
    );
}
export default MusselList;