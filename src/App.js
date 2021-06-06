import ReactPlayer from 'react-player'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ToggleStreamEpisodes/>
   </div>
  );
}


function ToggleStreamEpisodes() {
  const [displayVar, toggleDisplay] = useState(false)

  const toggleViewHandler = () => {
    toggleDisplay(!displayVar)
  }
  if (displayVar===false) {
    return (
      <div className="streampage">
        <button className="episodestogglebtn" onClick={toggleViewHandler}>Episodes</button>
        <StreamPlayer/>
     </div>
    )
  } else 
  return (
    <div className="episodeContainer">
      <button className="episodestogglebtn" onClick={toggleViewHandler}>Episodes</button>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/echo-radio-008"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/echo-radio-007"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/echo-radio-006"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/echo-radio-005"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/echo-radio-004"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/echo-radio-003"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/episode-002"/>
      <EpisodesComponent url="https://soundcloud.com/echoradioshow/episode-001"/>
      

    </div>
  )
}

function StreamPlayer() {
  const [isPlaying, togglePlaying] = useState(false)


  const handlePlay = () => {
    togglePlaying(!isPlaying)
  }

  return (
  <div className="playbtnep">
    <button className="player" onClick={handlePlay}>
    <div className="play"></div>
    <h1 className="title">Echo Radio</h1>
    </button>
    <ReactPlayer height="200" width="200" playing={isPlaying} url="https://soundcloud.com/echoradioshow/echo-radio-008"/>
  </div>
  )}


function EpisodesComponent(props) {
  return (
    <div className="episodes">
      <ReactPlayer height="100" width="100" url={props.url}/>
    </div>
  )

}

export default App;
