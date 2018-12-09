import React from 'react'

const PlayFromDrive = (props)=>{
    return (<div>
    <audio controls>    
    <source src={'http://docs.google.com/uc?export=open&id='+props.Link.split('=')[1]} type="audio/mp3"/>    
    Your browser does not support the
    <code>audio</code> element.
    </audio>
    </div>)
}

export {PlayFromDrive}