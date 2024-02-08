import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import MusselEntry from './MusselEntry.js';

const supabase = createClient("https://akvtnsloegzgkcsinwcn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdnRuc2xvZWd6Z2tjc2lud2NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MjI0NTEsImV4cCI6MjAyMjM5ODQ1MX0.xBdCGTcOklL2dloAPrkEc10UhBI28RpSXVtPdexBDFE");

function MusselList () {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getEntries();
      }, []);
  
      async function getEntries() {
        const { data } = await supabase.from("mussels").select();
        setEntries(data);
      }

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