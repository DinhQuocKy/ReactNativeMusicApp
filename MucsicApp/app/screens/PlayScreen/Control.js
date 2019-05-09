import React, { Component } from 'react';

import {  View,  Text,  StyleSheet,  Image,  TouchableOpacity,} from 'react-native';
import { Icon } from 'react-native-elements';

export default class Controls extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.0} onPress={this.props.onPressShuffle}>
                    <Icon color="white" name="shuffle" style={[styles.secondaryControl, this.props.shuffleOn ? [] : styles.off]} />
                </TouchableOpacity>
                <View style={{width: 40}} />
                <TouchableOpacity onPress={this.props.onBack}>
                    <Icon color="white" name="skip-previous"/>
                </TouchableOpacity>
                <View style={{width: 20}} />
                {!this.props.paused ?
                <TouchableOpacity onPress={this.props.onPressPause}>
                    <View style={styles.playButton}>
                    <Icon  color="white" name="pause"/>
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity onPress={this.props.onPressPlay}>
                    <View style={styles.playButton}>
                    <Icon color="white" name="play-circle-outline"/>
                    </View>
                </TouchableOpacity>
                }
                <View style={{width: 20}} />
                <TouchableOpacity onPress={this.props.onForward}
                disabled={this.props.forwardDisabled}>
                    <Icon color="white" name="skip-next" style={[this.props.forwardDisabled && {opacity: 0.3}]}/>
                </TouchableOpacity>
                <View style={{width: 40}} />
                <TouchableOpacity activeOpacity={0.0} onPress={this.props.onPressRepeat}>
                <Icon color="white" name="repeat" style={[styles.secondaryControl, this.props.repeatOn ? [] : styles.off]}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})