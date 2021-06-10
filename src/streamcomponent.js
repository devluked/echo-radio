import React from 'react'
import ReactPlayer from 'react-player'
import './App.css';


let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()



class StreamComponent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isPlaying: false,
            url: props.url,
            title: props.title,
            seconds: 0,
            playTime: (((hours*3600) + minutes*60 + seconds)%3610)
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.tick()
    }

    tick() {
        let ticker = this.player.getDuration()/3600
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                playTime: prevState.playTime + ticker/150
            }))
        }, 1)
    }

    

    handlePlay = () => {
        console.log(this.state.playTime)
        this.setState({isPlaying: !(this.state.isPlaying)})
        if(this.state.isPlaying===false) {
            this.tick()
        } else if (this.state.isPlaying===true) {
        clearInterval(this.interval)
        }
      }



    handleSeek = () => {
        this.player.seekTo(this.state.playTime/this.player.getDuration())
    }

    ref = player => {
        this.player = player
    }
 
    render() {
        return (
            <div className="stream">
              <button className="player" onClick={this.handlePlay}>
              <i class={this.state.isPlaying===false ? "play icon" : "stop icon"}/>
              <h1 className="title">{this.state.title}</h1>
              </button>
              <ReactPlayer controls={false} onPlay={this.handleSeek} ref={this.ref} height="0" width="0" playing={this.state.isPlaying} url={this.state.url}></ReactPlayer>
            </div>
          )
        }
}


export default StreamComponent;