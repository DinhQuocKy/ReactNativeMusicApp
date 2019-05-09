import React,{Component} from "react";
import { StyleSheet,View,Image,ImageBackground,Text, Alert, TouchableOpacity} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default class Categories extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header} >
                <ImageBackground  style={styles.headermenu} source={require('../assets/img/headerbackground.jpg')}>
                    <View style={styles.headeroverlay}>
                        <Text style={styles.title}>Music App</Text>    
                    </View>          
                </ImageBackground>    
                </View>
                <View style={styles.blockcontent}>
                    <TouchableOpacity
                        onPress = {()=> this.props.navigation.navigate('Playlist', {item : "US"})}>
                        <ImageBackground  source={require('../assets/img/ukmusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/ukmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=> this.props.navigation.navigate('Playlist', {item : "UK"})}>
                        <ImageBackground  source={require('../assets/img/DanceMusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/usmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.blockcontent}>
                    <TouchableOpacity
                        onPress = {()=> this.props.navigation.navigate('Playlist', {item : "VPOP"})}>
                        <ImageBackground  source={require('../assets/img/vpopmusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/vnmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=> this.props.navigation.navigate('Playlist', {item : "KPOP"})}>
                        <ImageBackground  source={require('../assets/img/kpopmusic.jpg')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/koreanmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flexDirection:'row',     
        justifyContent:'space-around', 
    },
    headeroverlay:{
        backgroundColor: 'rgba(255,255,255,.6)',
        flexDirection:'row',     
        justifyContent:'space-around', 
        height:80,
    },
    headermenu: {    
        width: '100%', 
        height: 80,        
    },
    title:{
        fontSize:25,
        padding:15,
        paddingTop:16,
        textAlign: 'center',       
        color: 'red',
    },
    blockcontent:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    categoryblock:{
       width: 150,
       height: 150,
       justifyContent:'center',
       alignItems: 'center',
    },
    overlay:{
        width: 150,
        height: 150,
        backgroundColor:'rgba(0,0,0,.5)',
        justifyContent:'center',
        alignItems: 'center',
    },
    categorytitle:{
        opacity: 0.7,
    },
    image:{
        width:100,
        height:100,
    },
});