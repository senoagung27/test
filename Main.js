/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation'
import {
  Actions, Scene, Router, Switch, Modal
} from 'react-native-router-flux';

import File1 from './File1';

// export const Stack = StackNavigator({
//   Props:{
//     screen : Props;
//   },
//   State:{
//     screen : State;
//   }
// })

//import RadioButton from 'radio-button-react-native';

class Perkenalan extends Component {
  	  render() {
  	    return (
  	      <Text>
            {this.props.name}
            {this.props.asal}
          </Text>
  	    );
  	  }
    }
    
    class Mobil extends Component {
  	  render() {
  	    return (
  	      <Text>
            {this.props.roda}
            {this.props.mesin}
            {this.props.kapasitas}
          </Text>
  	    );
  	  }
  	}

//ini adalah main project
class Main extends Component {

  hitungtotal() {
    let tugas = parseInt ((this.state.tugas*20) / 100); // total tugas diambil 20%
    let uts = parseInt((this.state.uts*40) / 100); // total UTS diambil 40%
    let uas = parseInt((this.state.uas*40) / 100); // total UAS diambil 40%
    
    // jumlahkan semua agar menghaslkan total akhir
    let total = tugas + uts + uas;
    let grade = "-";
    
    // cek grade berdasarkan total
    if (total >= 85 && total <= 100)        
    {
    grade = "A";
    }
    else if (total >= 80 && total <=84)
    {
    grade = "B+";
    }
    else if (total >= 70 && total <=79)
    {
    grade = "B";
    }
    else if (total >= 65 && total <= 69)
    {
    grade = "C+";
    }
    else if (total >= 55 && total <= 64)
    {
    grade = "C";
    }
    else if (total >= 45 && total <= 54)
    {
    grade = "D";
    }
    else if (total >= 0 && total <= 44)
    {
    grade = "E";
    }
    else
    {
    grade = "unknown";
    }
    
    this.setState({total, grade});
    }


    //function kucing begin
    kuc(genderkucing)
    
    {
      if(genderkucing==0)
        {
          
          this.setState({statuskucing:"hamil"})
        }
      else
      if(genderkucing==1)
            {
              this.setState({statuskucing:"sunat"})
            }
    }

    //end function kucing
  

      constructor(props){
        super(props)
        this.state = {
          npm:0,
          nama:0,
          tugas:0,
          uts:0,
          uas:0,
          total:0, 
          grade:0,
          status:'',           
          kucing:1,
          statuskucing:'',
          value: 0

        };
      }

      handleOnPress(value){
        this.setState({value:value})
    }

    hitung()
    {
      this.setState({status:'kucing'})
    }
  
  redirect()
    {
//this.Main.na
//navigation.navigate('States')

  }
    

   


  render() {
    return (
  //baris di bawah return itu untuk tampilan   

<View style = {{backgroundColor:'#bbdefb'}}>

       <View style={{backgroundColor:'#2196f3'}}>
          <Text style = {{
            padding: 10, 
            fontSize: 20, 
            color: 'white', 
            textAlign:'center'}} >
           aplikasi perhitungan tugas
           
         </Text>
        </View>
       
       <View style={{
         margin:20,
         padding: 10, 
         backgroundColor:'#e3f2fd'}}>
          
          <TextInput style = {{height: 40}}
             placeholder="Masukkan NPM"
             onChangeText={(npm)=>this.setState({npm})}            
           />
           
          <TextInput style = {{height: 40}}
             placeholder="Nama"
             onChangeText={(nama)=>this.setState({nama})}             
           />
           <TextInput style = {{height: 40}}
             placeholder="Masukkan tugas"
             onChangeText={(tugas)=>this.setState({tugas})}             
           />
           <TextInput style = {{height: 40}}
             placeholder="Masukkan UTS"
             onChangeText={(uts)=>this.setState({uts})}             
           />
           <TextInput style = {{height: 40}}
             placeholder="Masukkan UAS"
             onChangeText={(uas)=>this.setState({uas})}             
           />


         
           <Button
             onPress={()=>this.setState({
              total: (this.state.tugas*20/100)+(this.state.uts*40/100)+(this.state.uas*40/100),
              
             })}
             //onPress={()=>this.hitung()}
             title="Hitung"
             accessibilityLabel="Klik untuk menghitung"
           />



           <Button
            title="fungsi Hitung"
            onPress={() => this.hitungtotal()} />
      
            <Button
            title="fungsi Hitung"
            onPress={() => this.kuc(this.state.kucing)} />
      
         

      </View>

       <View style={{margin:20, backgroundColor:'#90caf9'}}>
         <Text style = {{padding: 10, fontSize: 20}} >
             NPM =  {this.state.npm} {"\n"}
             NAMA =  {this.state.nama} {"\n"}
             Total =  {this.state.total} {"\n"}                                                                   
             grade = {this.state.grade} {"\n"}    
             isine status kucing =  {this.state.statuskucing} {"\n"}                                         
         </Text>
        </View>
  </View> 
    );
  }
}

//class Tekantombol extends Component {
//  constructor(props) {
//        super(props);
    //    this.state = { text: '',text2:'Awesome' };
 //     }
//  alert("Input wrong.")
 // }
 export const SimpleApp = StackNavigator({
  Home: { screen: File1 },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = Main;
//AppRegistry.registerComponent('ProjectKedua', () => ProjectKedua);
