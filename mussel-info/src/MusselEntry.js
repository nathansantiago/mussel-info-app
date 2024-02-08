function MusselEntry({entry}) {
    return (
        <div className="mussel-entry">
            <h3>{entry.name}</h3>
            <p>{entry.description}</p>
        </div>
    );
}

export default MusselEntry;