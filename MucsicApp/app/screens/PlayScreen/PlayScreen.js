import React,{Component} from'react';
import {StyleSheet, View,Text,StatusBar} from 'react-native';
import Video from 'react-native-video';

import Header from './Header';
import AlbumArt from'./AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Control';

export const TRACKS = [
    {
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
    },
    {
      title: 'Hotline Bling',
      artist: 'Drake',
      albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
      audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
    },
  ]

export default class PlayScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            paused: true,
            totalLength: 1,
            currentPosition: 0,
            selectedTrack: 0,
            repeatOn: false,
            shuffleOn: false,
        };
    }

    setDuration = (data) =>{
        //console.log(data);
        this.setState({totalLength: Math.floor(data.duration)});
    }
    


  setTime=(data)=>{
        //console.log(data);
        this.setState({currentPosition:Math.floor(data.currentTime)});
    }

    seek=(time)=>{
        time = Math.round(time);
        this.refs.audioElement && this.refs.audioElement.seek(time);
        this.setState({
            currentPosition:time,
            paused:false,
        });
    }

    onBack=()=> {
        if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
          this.refs.audioElement && this.refs.audioElement.seek(0);
          this.setState({ isChanging: true });
          setTimeout(() => this.setState({
            currentPosition: 0,
            paused: false,
            totalLength: 1,
            isChanging: false,
            selectedTrack: this.state.selectedTrack - 1,
          }), 0);
        } else {
          this.refs.audioElement.seek(0);
          this.setState({
            currentPosition: 0,
          });
        }
      }
    
      onForward=()=> {
        if (this.state.selectedTrack < this.props.tracks.length - 1) {
          this.refs.audioElement && this.refs.audioElement.seek(0);
          this.setState({ isChanging: true });
          setTimeout(() => this.setState({
            currentPosition: 0,
            totalLength: 1,
            paused: false,
            isChanging: false,
            selectedTrack: this.state.selectedTrack + 1,
          }), 0);
        }
      }


    render(){
        const {navigation} = this.props;
        const tracks = navigation.getParam('tracks','No-Tracks');
        const track = tracks[this.state.selectedTrack];
        //console.log(tracks);
        
        const video = (this.state.isChanging || tracks == "No-Tracks") ? null : (
        <Video 
            source={{uri:track.audioUrl}} // Can be a URL or a local file.
            ref="audioElement"
            paused={this.state.paused}               // Pauses playback entirely.
            resizeMode="cover"           // Fill the whole screen at aspect ratio.
            repeat={this.state.repeatOn}                // Repeat forever.
            onLoadStart={this.loadStart} // Callback when video starts to load
            onLoad={this.setDuration}    // Callback when video loads
            onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
            onEnd={this.onEnd}           // Callback when playback finishes
            onError={this.videoError}    // Callback when video cannot be loaded
            style={styles.audioElement} />
        );// nó nhận dữ liệu đúng hết rồi á để tui xem lỗi này là gì máy tui không có  lỗi
        //console.log(video);
        return (
        <View style={styles.container}>
            <StatusBar hidden={true} /> 
            <Header message="Playing From Charts" navigation={navigation}/>

            <AlbumArt url={track.albumArtUrl} />
            <TrackDetails title={track.title} artist={track.artist} />
            <SeekBar
                onSeek={this.seek.bind(this)}
                trackLength={this.state.totalLength}
                onSlidingStart={() => this.setState({paused: true})}
                currentPosition={this.state.currentPosition} 
            />
            <Controls
            onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
            repeatOn={this.state.repeatOn}
            shuffleOn={this.state.shuffleOn}
            forwardDisabled={this.state.selectedTrack === tracks.length - 1}
            onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
            onPressPlay={() => this.setState({paused: false})}
            onPressPause={() => this.setState({paused: true})}
            onBack={this.onBack.bind(this)}
            onForward={this.onForward.bind(this)}
            paused={this.state.paused}/>
           {video}
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(4, 4, 4, 4)',
    },
    audioElement: {
      height: 0,
      width: 0,
    }
});