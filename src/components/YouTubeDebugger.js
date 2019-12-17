// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state ={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    bitrate=() =>{
        this.setState(previousState=> {return {settings: {...previousState.settings, bitrate: 12}}  })
    }

    resolution = () =>{
        this.setState(previousState => { return {settings: {...previousState.settings, video: {resolution:"720p"} }}})
    }
    render(){
        return(<div>
            <button onClick={this.bitrate} className="bitrate"></button>
            <button onClick={this.resolution} className="resolution"></button>
        </div>)
    }
}