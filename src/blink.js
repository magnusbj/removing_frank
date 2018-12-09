import React from 'react';

class BlinkLabel extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        on:false,
        interval: 0,
        nom :1
                 };
    this.setBPM = this.setBPM.bind(this);
    this.switchOnOff=this.switchOnOff.bind(this)
}

setBPM()  
{
    let nom = this.state.nom + 1
    if (nom > this.props.nom){
        nom = 1
    }
    this.setState({nom:nom});
}
componentDidUpdate(oldProps, oldState){
    if (oldProps.BPM !== this.props.BPM){
        clearInterval(this.state.interval)
        let BPM = 60000/this.props.BPM
        let interval = setInterval(this.setBPM,BPM)
        this.setState({interval:interval})
    }
}
componentDidMount() {
    let BPM = 60000/(this.props.BPM?this.props.BPM:100)
    let interval = setInterval(this.setBPM, BPM)
    this.setState({interval:interval})
 }
switchOnOff(){
    let st = !this.state.on
    this.setState({on:st})
}
render() {
    if (this.state.on && this.props.BPM){
    let fill_grade = this.state.nom/this.props.denom*100 + '%'
    return (
        <div className="metronome">
      <div className='progress-bar' style={{'height':100,
       }}>
       <div key={Math.random()} className="filler" style={{width:fill_grade}}></div>
      </div>
      {this.state.nom} / {this.props.denom?this.props.denom:4}
      <button className='btn' onClick={this.switchOnOff}>Off</button>
      </div>
     )}
     else return <div><h4>Metronome</h4><button className="btn btn-dark" onClick={this.switchOnOff}>On</button></div>
    }
}

export {BlinkLabel}