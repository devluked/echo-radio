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
            title: props.title,
            playTime: ((hours*119) + minutes + seconds)
        }
        this.tick = this.tick.bind(this)
    }

    tick() {
        this.interval = setInterval(() => {
            console.log(this.state.playTime)
            this.setState(prevState => ({
                playTime: prevState.playTime + 1
            }))
        }, 1000)
    }

    handlePlay = () => {
        this.setState({isPlaying: !(this.state.isPlaying)})
        console.log(this.state.playTime/2855)
         if (this.state.isPlaying===false) {
            this.tick()
        }
      }


    handleSeek = () => {
        this.player.seekTo(this.state.playTime/2855)
    }

    handleProgress = () => {
        console.log('onProgress')
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
              <ReactPlayer onPlay={this.handleSeek} ref={this.ref} height="0" width="0" playing={this.state.isPlaying} url={this.state.url}></ReactPlayer>
            </div>
          )
        }
}


export default StreamComponent;