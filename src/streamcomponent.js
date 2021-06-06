import {useState, useRef} from 'react'
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
            title: props.title
        }
    }

    handlePlay = () => {
        this.setState({isPlaying: !(this.state.isPlaying)})
      }


    handleSeek = () => {
        let playTime = ((hours*119) + minutes + seconds)
        playTime = playTime/2855
        this.player.seekTo(playTime)
    }

    ref = player => {
        this.player = player
    }
 
    render() {
        return (
            <div className="stream">
              <button className="player" onClick={this.handlePlay}>
              {/*<div className="play"></div>*/}
              <img src="https://img.icons8.com/fluent-systems-regular/48/000000/play--v1.png"/>
              <h1 className="title">{this.state.title}</h1>
              </button>
              <ReactPlayer loop={true} onPlay={this.handleSeek} ref={this.ref} height="0" width="0" playing={this.state.isPlaying} url={this.state.url}></ReactPlayer>
            </div>
          )
        }
}


export default StreamComponent;