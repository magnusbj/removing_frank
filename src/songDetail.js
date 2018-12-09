import React from 'react';
import {SongCues} from './SongCues'

const SongDetails = (props)=>{
        return(
            <div className="card text-center bg-dark" style={{minHeight:'400px'}}>
            <div className="card-header">
            {props.Track? props.Track:'Click a song'} 
            </div>
            {props._id &&                <div className="row">
            <div className="col-md-3">
            <div className="card-body">
            <ul className="list-group list-group-flush " >
            <li className="list-group-item bg-dark" >{props.starter}<small> start the song</small></li>
            <li className="list-group-item bg-dark"><small>The tempo is </small> {props.BPM} <small>in </small>{props.beat_nom} / {props.beat_denom}</li>
            </ul>
            </div>
            
            </div>
            <div className="col-md-8">
            {props._id && <SongCues {...props}/>}
            </div>
            </div>}
            <div className="card-footer text-muted">
            Samples
            </div>
            </div>
            )
        }
    export {SongDetails}