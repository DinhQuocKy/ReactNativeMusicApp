import React,{Component} from "react";
import { StyleSheet, FlatList, View, Picker, ImageBackground, Text, Alert, TouchableOpacity} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import {ListItem} from 'react-native-elements';


//var list = require('./DataMusic.json');
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
const listpicker=['UK','US','V-POP','K-POP'];

export default class Playlist extends Component{
    constructor(props){
        super(props);
        this.state={
            loading: true, 
            data: [],
            pickerdata:[],
            currentPicker : '',
            kind: 'UK'
        };
    }

    componentDidMount=()=>{
        //console.log(list);
        this.loadInitialData();
    }

    componentDidUpdate=()=>{
        this.setUPDataPicker();
    }

    loadInitialData=()=>{
        
       this.setState({
           data : list, 
           pickerdata: listpicker,
        });
    }

    renderSeperator(){
        return ( <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#CED0CE",
              marginLeft: "20%",
            }}
        />);
    }

    renderHeader = ()=>{
       return(
       <Picker
       selectedValue={this.state.currentPicker}
       style={{height: 50, width: 150}}
       onValueChange={(itemValue)=> console.log(itemValue)}>
        {
            pickerItems = this.state.pickerdata.map(pickerinfo=>( 
            <Picker.Item key={pickerinfo.toString()} label={pickerinfo} value={pickerinfo}/>
            ))
        }
       </Picker>
       );
    };
 
    
    setUPDataPicker = ()=>{
        var item = this.props.navigation.getParam('item');
        //console.log(item);
        if(item!=this.state.kind && item!=null){
            switch(item){
                case 'US': 
                    this.setState({data: list.US, pickerdata: listpicker});
                    break;
                case 'UK':
                    this.setState({data: list.UK, pickerdata: listpicker});
                    break;
                case 'VPOP':
                    this.setState({data: list.VPOP, pickerdata: listpicker});
                    break;
                case 'KPOP':
                    this.setState({data: list.KPOP, pickerdata: listpicker});
                    break;
            }
            this.setState({kind: item})
        }
    }

    render(){
        console.log(this.state.data);

        return (
            <View>
            <View style={styles.header} >
            <ImageBackground  style={styles.headermenu} source={require('../assets/img/headerbackground.jpg')} >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Music App</Text>    
                </View>          
            </ImageBackground>    
            </View>
           <FlatList           
            data={list}
            renderItem={({item}) => 
                <View>
                    <TouchableOpacity  
                        onPress={()=>{                        
                            var routetrack = [];

                            list.forEach(()=>{console.log("track: " + list.track)});
                            //console.log("Send tracks: "+ routetrack);
                            //routetrack.push(item.track);
                            //console.log(routetrack);
                            this.props.navigation.navigate('PlayScreen',{tracks : list})
                            
                        }}>
                        <ListItem
                            title={item.title} 
                            subtitle={item.subtitle}
                            leftAvatar={{source:{uri: item.icon}}}
                            rightIcon={{name:'chevron-right'}}
                            key
                            style={styles.listitem}
                        />
                    </TouchableOpacity>
                </View>
            }
            ItemSeparatorComponent = {this.renderSeperator}
            keyExtractor ={(item)=>item.title}
            //ListHeaderComponent={this.renderHeader}
            />
            </View>
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
    listitem: {
        borderBottomWidth:0,
        marginTop:10,
    }
});