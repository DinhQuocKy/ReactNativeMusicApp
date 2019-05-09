import React,{Component} from "react";
import { StyleSheet, FlatList, View, Picker, ImageBackground, Text, Alert, TouchableOpacity} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import {ListItem} from 'react-native-elements';

var list = require('./DataMusic.json');

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
           data : list.UK, 
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
        console.log(item);
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
            data={this.state.data}
            renderItem={({item}) => 
                <View>
                    <TouchableOpacity  
                        onPress={()=>{                        
                            var routetrack = [];
                            routetrack.push(item.track);
                            console.log(routetrack);
                            this.props.navigation.navigate('PlayScreen',{tracks : routetrack})
                            
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