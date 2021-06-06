import ReactPlayer from 'react-player'
import useState from 'react'

function EpisodesComponent(props) {
    const [isPlaying, togglePlaying] = useState(false)
    const {url, title} = props
    
  
    const handlePlay = () => {
      togglePlaying(!isPlaying)
    }
  
    return (
      <div >
        <button className="player" onClick={handlePlay}>
        <div className="play"></div>
        <h1 className="title">{title}</h1>
        </button>
        <ReactPlayer playing={isPlaying} height="0" width="0" url={url}/>
      </div>
    )
  
  }

export default EpisodesComponent