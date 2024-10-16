import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleReduce = () =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin:'15px',
        padding:'10px'
    }

    return(
        <div style={teamStyle}>
            <h2>Player: {team} </h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}