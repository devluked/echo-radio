import {useState} from 'react'
import ReactPlayer from 'react-player'
import './App.css';


function StreamComponent(props) {
    const [isPlaying, togglePlaying] = useState(false)
    const {url, title} = props
  
  
    const handlePlay = () => {
      togglePlaying(!isPlaying)
    }
  
    return (
      <div className="stream">
        <button className="player" onClick={handlePlay}>
        {/*<div className="play"></div>*/}
        <img src="https://img.icons8.com/fluent-systems-regular/48/000000/play--v1.png"/>
        <h1 className="title">{title}</h1>
        </button>
        <ReactPlayer playing={isPlaying} height="0" width="0" url={url}/>
      </div>
    )
  }

export default StreamComponent;