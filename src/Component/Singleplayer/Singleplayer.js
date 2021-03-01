import React from 'react';
import './Singleplayer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Singleplayer = (props) => {
    const player = props.playerCart
    let totalCost= player.reduce((totalCost,pl)=>totalCost+pl.salary,0)
    return (
        <div>
            <h2 className="text-white/primary">Team Summary</h2>
            <hr/>
            <h5 className="totalPlayer">Selected Player: {player.length} </h5>
            <h3 className="budget">Total Budget: ${totalCost}</h3>
            <div className="team-info">
                <div className="name">
                    <ul>
                        <h5>Player Name</h5>
                        <hr/>
                        {
                            player.map(pl=><li>{pl.name}</li>)
                        }
                    </ul>
                </div>
                <div className="position">
                    <ul>
                    <h5>Position</h5>
                        <hr/>
                        {
                            player.map(pl=><li>{pl.title}</li>)
                        }
                    </ul>
                </div>
                <div className="cost">
                    <ul>
                    <h5>Auction Price</h5>
                        <hr/>
                        {
                            player.map(pl=><li>${pl.salary}</li>)
                        }
                    </ul>
                </div>
            </div>
           
            
        </div>
    );
};

export default Singleplayer;