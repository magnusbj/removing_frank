import React, { Component } from 'react';
import {restdb} from './helper'


class SongCues extends Component{
    constructor(props){
        super(props)
        this.state = {data:[], addComment:true}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }
    fetchData(){
        restdb.get('/rest/tracks/'+this.props._id+'/song-cues')
        .then(res => {
            this.setState({data: res.data})
        })
    }
    componentDidMount(){
        this.fetchData()
    }
    handleChange(event){
        const target = event.target;
        const name = target.name;
        this.setState({[name]:target.value})
    }
    handleSubmit(){
        let {when, describe} = this.state
        restdb.post('/rest/tracks/'+this.props._id+'/song-cues', {When: when, Description:describe})
        this.setState({when:'', describe:''})
        this.fetchData()

    }
    addComment(){
        let ac = !this.state.addComment
        this.setState({addComment:ac})
    }
    removeLine(){
        restdb.delete('/rest/song-cues/'+this.state.cue_id)
        this.cancel()
        this.fetchData()
    }
    warning(cue_id){
        this.setState({sure:true, cue_id})
    }
    cancel(){
        this.setState({sure:false, cue_id:''})
    }
    render(){
        let inputs = <div>
            <input type="text" id='when' placeholder="When" name='when' value={this.state.when} onChange={this.handleChange}/>
            <input type="text" id='description' placeholder='Description' name='describe' value={this.state.describe} onChange={this.handleChange}/>
            <button className="btn btn-dark" onClick={this.handleSubmit}>add</button>
        </div>

        if (this.state.data){
            const cues = this.state.data.map(cue=>{
                return  <tr key={cue._id}>         
                <td>{cue.When}</td>
                <td>{cue.Description}</td>
                <td><button className="btn btn-dark" onClick={()=>this.warning(cue._id)}>-</button></td>
                </tr>
            })
            return (
                <div>
                <table className="table table-sm">
                <tbody>
                {cues}
                </tbody>
                </table>
                {this.state.addComment && inputs}                
                {this.state.sure && <div>
                    <p>You sure to delete?</p>
                    <button className="btn btn-warning" onClick={()=>this.removeLine()}>Delete</button>
                    <button className="btn btn-dark" onClick={()=>this.cancel()}>Cancel</button>
                </div>}
                <button className='btn btn-dark' onClick={() => this.addComment()}>+</button>
                </div>
                )
            }
            else return <div></div>
        }
        
    }
    
    export {SongCues}