import React from 'react'
import "./18.3 card-list.styles.css"
import { Card } from "../card/card-component";

export const CardList =props=>(

    // return <div className='card-list'>
    //     {---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------(<h1------C-ke----y={monster.id}> monster={monster} </h1>
    //     ))}
    //     </div>

    <div className='card-list'>
        {props.monsters.map(monster=>(
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);