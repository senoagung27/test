import React from 'react';
import {
  AppRegistry,
  Text,
  Button,TextInput,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class rumuspersegi extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sisi:0,
      luas:0
    };
  }
  static navigationOptions = {
    title: 'Rumus Luas Persegi',
  };
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
 
        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung luas persegi
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Sisi"
              onChangeText={(sisi)=>this.setState({sisi})}
              keyboardType = 'numeric'
            /> 
            <Button
              onPress={()=>this.setState({
                luas: (this.state.sisi*this.state.sisi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
 
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Sisi =  {this.state.sisi} {"\n"}
              Luas = {this.state.luas}
          </Text>
         </View>
   </View>    );
  }
}