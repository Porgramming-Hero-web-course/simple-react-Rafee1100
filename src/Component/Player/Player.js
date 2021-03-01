import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props)
    const {name,img,age,salary,country,title,flag}=props.player
    
    return (
            <div className="player-container">
                <div className='player-info'>
                    <img className="profile-pic" src={img} alt=""/>
                    <h2>{name}</h2>
                    <p><strong>Country: {country} </strong> &nbsp;<img className='flag' src={flag} alt=""/></p>
                    <p>Type: {title}</p>
                    <h4>Auction Money : <span className="playCost">${salary}</span></h4>
                    <button onClick={()=>props.handleAddPlayer(props.player)} className='add-player'> <FontAwesomeIcon icon={faUserPlus} /> &nbsp; Add Player to Team</button>
                </div>
            </div>
    );
};

export default Player;