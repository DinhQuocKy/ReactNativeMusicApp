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

  const list = [
    {
        "title": "Slow dancing in a burning room",
        "icon": "http://4.bp.blogspot.com/-HklEyrnpI54/T7Zdxuvp2pI/AAAAAAAABfY/oZBEE-mRXXM/s1600/untitled.jpg",
        "subtitle": "Album: Continuum",
        "track": {
            "title": "Slow dancing in a burning room",
            "artist": "John Mayer",
            "albumArtUrl": "http://4.bp.blogspot.com/-HklEyrnpI54/T7Zdxuvp2pI/AAAAAAAABfY/oZBEE-mRXXM/s1600/untitled.jpg",
            "audioUrl": "http://www.1songday.com/wp-content/uploads/2012/11/08-Slow-Dancing-In-A-Burning-Room.mp3"
        }
    },
    {
        "title": "Gravity",
        "icon": "https://img.discogs.com/7xKDizWVb5bPkwOuiZE8_pv9aJA=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1701329-1459316343-6392.jpeg.jpg",
        "subtitle": "Album: Continuum",
        "track": {
        "title": "Gravity",
        "artist": "John Mayer",
        "albumArtUrl": "https://img.discogs.com/7xKDizWVb5bPkwOuiZE8_pv9aJA=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1701329-1459316343-6392.jpeg.jpg",
        "audioUrl": "http://www.beihai2000.com/files/201010.mp3"
        }
    },
    {
        "title": "Stereo Hearts",
        "icon": "https://cps-static.rovicorp.com/3/JPG_500/MI0003/623/MI0003623595.jpg?partner=allrovi.com",
        "subtitle": "Stereo Hearts",
        "track": {
            "title": "Stereo Hearts",
            "artist": "Gymclassheroes Ft. Adam Levine",
            "albumArtUrl": "https://cps-static.rovicorp.com/3/JPG_500/MI0003/623/MI0003623595.jpg?partner=allrovi.com",
            "audioUrl": "https://a.tumblr.com/tumblr_lmo32mjsxK1qzfb7xo1.mp3"
        }
    },
    {
        "title": "Hotel California",
        "icon": "https://bestclassicbands.com/wp-content/uploads/2015/11/Abbey-Hotel-Cali-crop.jpg",
        "subtitle": "Album: The Complete Greatest Hits",
        "track": {
            "title": "Hotel California",
            "artist": "The Eagles",
            "albumArtUrl": "https://bestclassicbands.com/wp-content/uploads/2015/11/Abbey-Hotel-Cali-crop.jpg",
            "audioUrl": "http://sacps.edu.hk/elearning/r%20eagles%20-%20hotel%20california.mp3"
        }
    }
];


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
            data: list,
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

    onPressRepeat=()=>{
      this.setState({repeatOn : true});
      
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
      if (this.state.selectedTrack < this.state.data.length - 1) {
        this.refs.audioElement && this.refs.audioElement.seek(0);
        this.setState({ isChanging: true });
        setTimeout(() => this.setState({
          currentPosition: 0,
          totalLength: 1,
          paused: false,
          isChanging: false,
          repeatOn: this.state.repeatOn,
          selectedTrack: this.state.selectedTrack + 1,
        }), 0);
      }
      else if(this.state.repeatOn == true){
        setTimeout(() => this.setState({
          currentPosition: 0,
          totalLength: 1,
          paused: false,
          isChanging: false,
          selectedTrack: 0,
        }), 0);
      }
    }


    render(){
        const {navigation} = this.props;
        const tracks = navigation.getParam('tracks','No-Tracks');
        //console.log("length: " + list.length);
        //console.log("tracks" + tracks.length);
        console.log("repeat"+ this.state.repeatOn);
        const track = tracks[this.state.selectedTrack];
        const video = (this.state.isChanging || tracks == "No-Tracks") ? null : (
        <Video 
            source={{uri:track.track.audioUrl}} // Can be a URL or a local file.
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

            <AlbumArt url={track.track.albumArtUrl} />
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