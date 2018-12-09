import React from 'react';

const SongCard = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body" onClick={() => {
            props.setActiveSong(props.song._id)}}>
            <h5 className="card-title">{props.song.Track}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Tempo {props.song.BPM}</h6>
            <p className="card-text">{props.song.notes}</p>
            </div>
            </div>
            )
        }
        
        export {SongCard}