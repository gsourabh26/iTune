import React from "react";
import {connect} from "react-redux";
import ReactAudioPlayer from "react-audio-player";  

class ITune extends React.Component {
    render(){
        var itune = this.props.itune;
        if(itune){
            console.log("itune.previewUrl>>>>.",itune.previewUrl);
            return (
                <div id="itune">   
                    <div id="ituneRow1">
                        <div id="artistName">Artist: {itune.artistName}</div>
                        <div id="genre">Genre: {itune.primaryGenreName}</div>
                        <div id="timing">Time: {Math.round(itune.trackTimeMillis/600)/100}</div>
                    </div>
                    <div id="ituneRow2">
                        <div id="collectionName">Collection: {itune.collectionName}</div>
                        <div id="trackPrice">Price: <b>{itune.trackPrice} {itune.currency}</b></div>
                    </div>                   
                    <div id="ituneRow3">
                        <ReactAudioPlayer
                            src={itune.previewUrl}
                            />
                    </div>                  
                </div>
            )
        }
    }
}

export default ITune;