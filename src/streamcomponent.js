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
            playTime: (((hours*3600) + minutes*60 + seconds)%3600)
        }
        this.tick = this.tick.bind(this)
    }

    tick() {
        let ticker = this.player.getDuration()/3600
        this.interval = setInterval(() => {
            console.log(seconds)
            this.setState(prevState => ({
                seconds: prevState.seconds + ticker/150
            }))
        }, 1)
    }

    

    handlePlay = () => {

        console.log(this.state.playTime)
        this.setState({isPlaying: !(this.state.isPlaying), playTime: this.state.playTime + this.state.seconds, seconds: 0})
        clearInterval(this.interval)
        console.log(this.state.seconds)
        if (this.state.isPlaying===false) {
            this.tick()
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
              {/*<div className="play"></div>*/}
              <i class={this.state.isPlaying===false ? "play icon" : "stop icon"}/>
              <h1 className="title">{this.state.title}</h1>
              </button>
              <ReactPlayer controls={false} onPlay={this.handleSeek} ref={this.ref} height="0" width="0" playing={this.state.isPlaying} url={this.state.url}></ReactPlayer>
            </div>
          )
        }
}


export default StreamComponent;