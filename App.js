
import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet
 
} from 'react-native';
import axios from 'axios';
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data : []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this.renderItem} 
        ItemSeparatorComponent={this.renderSeperator}
        />
      </View>
    );
  }

  renderItem = ({item}) => {
    return (
     <View  style={{flex:1,flexDirection: 'row'}}>
       <Image style={{width:100,height:100}}
       source= {{uri: item.picture}}/>
       <View style={{flex:1,justifyContent: 'center' }}>
         <Text style={styles.customText}>{item.name}</Text>
         <Text style={styles.customText}>{item.email}</Text>
         <Text style={styles.customText}>{item.phone}</Text>
       </View>

     </View>
      );
 
  }
  renderSeperator = () =>{
    return(
        <View style={{height: 1,width:"100%",backgroundColor: 'black'}}>
            
        </View>
      );
  }
  componentDidMount() {
    axios.get("http://www.json-generator.com/api/json/get/bPGAWtThHC?indent=2").then((response)=>{
     this.setState({
        data:response.data
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E4F1FE'
  },
  customText:{
    fontSize: 18,
    marginBottom: 5,
    color: 'green'
  }
})