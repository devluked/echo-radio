import ReactPlayer from 'react-player'
import './App.css';
import { useEffect, useState } from 'react';
import { LiveDotText, TopBar } from './smallelements.js'
import { Episodes } from './episodes'
import StreamComponent from './streamcomponent.js'

const recentEp = "https://soundcloud.com/echoradioshow/echo-radio-008"

function App() {
  return (
    <div className="App">
      <TopBar/>
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
      <div className="streambar">
        <div className="live-dot">
          <LiveDotText/>
        </div>
        <div className="streambtn">
          <StreamPlayer recentEp={recentEp}/>
          {/* <button className="episodestogglebtn" onClick={toggleViewHandler}><h1 className="title">Episodes</h1></button> */}
        </div>

     </div>
    )
}}

function StreamPlayer(props) {
  return (
    <StreamComponent title={"ALTERNATIVE HITS & GROOVY DEEP CUTS"} url={props.recentEp}/>
  )}


export default App;
