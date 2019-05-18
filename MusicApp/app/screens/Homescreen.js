import React,{Component} from "react";
import { StyleSheet,View, Text , Image, ScrollView,ImageBackground,FlatList} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

var WhatShouldIHear =[
    {
        id:'1',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection A',
    },
    {
        id:'2',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection B',
    },
    {
        id:'3',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection C',
    }
];
var TopFavoriteSong=[
    {
        id:'1',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection A',
    },
    {
        id:'2',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection B',
    },
    {
        id:'3',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection C',
    }
];
var TopAlbumns = [
    {
        id:'1',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection A',
    },
    {
        id:'2',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection B',
    },
    {
        id:'3',
        albumimage: require('../assets/img/musicnotfound.jpg'),
        albumtitle : 'Collection C',
    }
];

export default class HomeScreen extends Component {
    constructor (props){
        super(props);
        this.state = {
            WhatShouldIHear: [],
            TopAlbumns: [],
            TopFavoriteSong: [],
        }
    }

    LoadFavoriteSong(){
        this.state.TopFavoriteSong = TopFavoriteSong;
    }
    LoadWhatShouldIHear(){
        this.state.WhatShouldIHear = WhatShouldIHear;
    }
    LoadTopAlbums(){
        this.state.TopAlbumns = TopAlbumns;
    }

    componentWillMount(){
        this.LoadFavoriteSong();
        this.LoadWhatShouldIHear();
        this.LoadTopAlbums()
    }

    render(){
        return (
            <ScrollView nestedScrollEnabled= {true}>
                <View style={styles.header} >
                    <ImageBackground  style={styles.headermenu} source={require('../assets/img/headerbackground.jpg')}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>Music App</Text>    
                        </View>          
                    </ImageBackground>    
                </View>
                
                <View style={styles.blockcontent}>
                    <Text style={styles.blocktitle}>What should I hear today?</Text>
                    <FlatList 
                        style={styles.imagecontainer}
                        data = {this.state.WhatShouldIHear}
                        renderItem = {({item})=>(
                            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Playlist')}}>
                            <Image style ={styles.image} source = {item.albumimage}></Image>
                            <Text style={styles.collectiontitle}>{item.albumtitle}</Text>
                            </TouchableOpacity>
                        )}
                        nestedScrollEnabled = {true}
                        horizontal = {true}
                        keyExtractor= {(item)=>item.id}
                        contentContainerStyle = {{flex:1,justifyContent:'space-around' }}
                    />
               </View>
                <View style={styles.blockcontent}>
                   <Text style={styles.blocktitle}>Top favourite songs:</Text>  
                   <FlatList 
                        style={styles.imagecontainer}
                        data = {this.state.TopFavoriteSong}
                        renderItem = {({item})=>(
                            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Playlist')}}>
                            <Image style ={styles.image} source = {item.albumimage}></Image>
                            <Text style={styles.collectiontitle}>{item.albumtitle}</Text>
                            </TouchableOpacity>
                        )}
                        nestedScrollEnabled = {true}
                        horizontal = {true}
                        keyExtractor= {(item)=>item.id}
                        contentContainerStyle = {{flex:1,justifyContent:'space-around' }}
                    /> 
               </View>
                <View style={styles.blockcontent}>
                    <Text style={styles.blocktitle}>Top Albums:</Text>
                    <FlatList 
                        data = {this.state.TopAlbumns}
                        renderItem = {({item})=>(
                            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Playlist')}}>
                            <Image style ={styles.image} source = {item.albumimage}></Image>
                            <Text style={styles.collectiontitle}>{item.albumtitle}</Text>
                            </TouchableOpacity>
                        )}
                        nestedScrollEnabled = {true}
                        horizontal = {true}
                        keyExtractor= {(item)=>item.id}
                        contentContainerStyle = {{flex:1,justifyContent:'space-around' }}
                    /> 
               </View>
                <View style={styles.blockcontent}>
                    <Text style={styles.blocktitle}>Top Albums 2:</Text>
                    <FlatList 
                        data = {this.state.TopAlbumns}
                        renderItem = {({item})=>(
                            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Playlist')}}>
                            <Image style ={styles.image} source = {item.albumimage}></Image>
                            <Text style={styles.collectiontitle}>{item.albumtitle}</Text>
                            </TouchableOpacity>
                        )}
                        nestedScrollEnabled = {true}
                        horizontal = {true}
                        keyExtractor= {(item)=>item.id}
                        contentContainerStyle = {{flex:1,justifyContent:'space-around' }}
                    /> 
               </View>
            </ScrollView>      
        );
    }
}


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
    blockcontent:{
        flex:1,
        padding:10,
        height: 200,
        backgroundColor: 'rgba(255,255,255,.6)',
        marginTop:10,
    },
    blocktitle:{
        marginBottom:10,
        textAlign:'left',
        fontSize:20,
        fontWeight:'bold',
    }, 
    imagecontainer:{
        flex:1,
        flexDirection:'row',
        //justifyContent:'space-around',
    },
    image:{       
        width:100,
        height:100,       
    },
    collectiontitle:{
        textAlign:'center',
    },
    
});