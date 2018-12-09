import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './frank.png';
import './App.css';
import 'react-bootstrap'
import {SongCard} from './cards'
import {SongDetails} from './songDetail'
import {BlinkLabel} from './blink'
import _ from 'lodash'
import {restdb} from './helper'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data:[]}
    this.setActiveSong = this.setActiveSong.bind(this)
  }
  componentDidMount(){
    
    restdb.get('/rest/tracks')
    .then(res => {
      this.setState((state) => {
        let list_data = _.values(res.data)
        return {data :list_data}})})
      }
      
      setActiveSong(songId){
        let activeSong = this.state.data.find(s => s._id === songId)
        this.setState({activeSong:songId, ...activeSong})
      }
      
      flash(BPM){
        this.setState({BPM :BPM})
      }
      render() {
        let songs = this.state.data.map(song=>{
          return (
            <div className="col-md-2" key={song._id}><SongCard flash={(BPM)=>this.flash(BPM)} song={song} setActiveSong={this.setActiveSong}/></div>
            )
          })
          let {data, ...other} = this.state
          return (
            <div className="App">
              <div className="App-header">
                <div className="container-fluid">
                  <div className="row">
                  <div className="col-md-2">
                  <BlinkLabel BPM={this.state.BPM} label={'beating'} nom={this.state.beat_nom} denom={this.state.beat_denom}/>
                  </div>
                    <div className="col-md-8">
                    <SongDetails key={Math.random()} {...other} />
                    </div>
                    <div className="col-md-2">
                      <img src={logo} className="App-logo" alt="logo" />
                    </div>
                  </div>
                </div>
              <div className="row" style={{padding:'20px'}}>
                {songs}
              </div>
            </div>
          </div>
            );
          }
        }
        export default App;
        