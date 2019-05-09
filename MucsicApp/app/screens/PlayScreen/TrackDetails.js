import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
export default class trackDetails extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon color="white" name="add-circle-outline"/>
                </TouchableOpacity>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.artist}>{this.props.artist}</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.moreButton}>
                        <Icon name="more-horiz" color="white"/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      paddingTop: 10,
      flexDirection: 'row',
      paddingLeft: 20,
      alignItems: 'center',
      paddingRight: 20,
    },
    detailsWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
    artist: {
      color: 'rgba(255, 255, 255, 0.72)',
      fontSize: 12,
      marginTop: 4,
    },
    button: {
      opacity: 0.72,
    },
    moreButton: {
      borderColor: 'rgb(255, 255, 255)',
      opacity: 0.72,
      alignItems: 'center',
      justifyContent: 'center',
    },
    moreButtonIcon: {
      height: 17,
      width: 17,
    }
  });