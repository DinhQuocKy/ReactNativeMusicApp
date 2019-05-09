import React,{Component} from'react';
import {StyleSheet,View,Text,ImageBackground} from 'react-native';

import {SearchBar} from 'react-native-elements';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import TabNavigator from '../components/Navigator';
import PlayScreen from './PlayScreen/PlayScreen';

const Navigator = createAppContainer(TabNavigator);


class MenuScreen extends Component{
    state={
        search: '',
    };
    updateSearch = search => {
        this.setState({search});
    }
    render(){
        const {search} = this.state;
        return (  
            <View style={styles.container}>
                <View style={styles.header} >
                    <ImageBackground  style={styles.headermenu} source={require('../assets/img/headerbackground.jpg')}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>Music App</Text>    
                        </View>          
                    </ImageBackground>    
                </View>
                <Navigator/>
            </View>
        );
    }
}



export default createAppContainer(createStackNavigator({
    MenuScreen: {
        screen: MenuScreen,
    },
    PlayScreen: {
        screen: PlayScreen,
        navigationOptions:{
           header:null,

        }
    }
},
{
    initialRouteName:'MenuScreen',
})
);



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F2F2F2',
    },
    header:{
        flexDirection:'row',     
        justifyContent:'space-around', 
    },
    overlay:{
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
    searchbar: {
        width:50,
        color: '#111',
    },
});