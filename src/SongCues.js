import React, { Component } from 'react';
import {restdb} from './helper'


class SongCues extends Component{
    constructor(props){
        super(props)
        this.state = {data:[]}
    }
    componentDidMount(){
        restdb.get('/rest/tracks/'+this.props._id+'/song-cues')
        .then(res => {
            this.setState({data: res.data})
        })
    }
    render(){
        if (this.state.data){
            const cues = this.state.data.map(cue=>{
                return  <tr key={cue._id}>         
                <td>{cue.When}</td>
                <td>{cue.Description}</td>
                </tr>
            })
            return (
                <table className="table table-sm">
                <tbody>
                {cues}
                </tbody>
                </table>
                )
            }
            else return <div></div>
        }
        
    }
    
    export {SongCues}