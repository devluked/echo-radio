import ReactPlayer from 'react-player'
import './App.css';
import { useEffect, useState } from 'react';

const recentEp = "https://soundcloud.com/echoradioshow/echo-radio-008"

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
        <StreamPlayer recentEp={recentEp}/>
     </div>
    )
  } else 
  return (
    <div className="episodeContainer">
      <button className="episodestogglebtn" onClick={toggleViewHandler}>Episodes</button>
      <EpisodesComponent title={"episode 8"} url="https://soundcloud.com/echoradioshow/echo-radio-008"/>
      <EpisodesComponent title={"episode 7"} url="https://soundcloud.com/echoradioshow/echo-radio-007"/>
      <EpisodesComponent title={"episode 6"} url="https://soundcloud.com/echoradioshow/echo-radio-006"/>
      <EpisodesComponent title={"episode 5"} url="https://soundcloud.com/echoradioshow/echo-radio-005"/>
      <EpisodesComponent title={"episode 4"} url="https://soundcloud.com/echoradioshow/echo-radio-004"/>
      <EpisodesComponent title={"episode 3"} url="https://soundcloud.com/echoradioshow/echo-radio-003"/>
      <EpisodesComponent title={"episode 2"} url="https://soundcloud.com/echoradioshow/episode-002"/>
      <EpisodesComponent title={"episode 1"} url="https://soundcloud.com/echoradioshow/episode-001"/>
    </div>
  )
}

function StreamPlayer(props) {
  const [isPlaying, togglePlaying] = useState(false)


  const handlePlay = () => {
    togglePlaying(!isPlaying)
  }

  return (
  <div className="playbtnep">

    <EpisodesComponent title={"Echo Radio"} url={props.recentEp}/>
  </div>
  )}


function EpisodesComponent(props) {
  const [isPlaying, togglePlaying] = useState(false)
  const {url, title} = props


  const handlePlay = () => {
    togglePlaying(!isPlaying)
  }

  return (
    <div className="episodes">
       <button className="player" onClick={handlePlay}>
      <div className="play"></div>
      <h1 className="title">{title}</h1>
      </button>
      <ReactPlayer playing={isPlaying} height="0" width="0" url={url}/>
    </div>
  )

}

export default App;
