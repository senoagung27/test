import React from 'react';
import {
  AppRegistry,
  Text,
  Button,StyleSheet,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import rumuslingkaran from './rumuslingkaran';
import rumuspersegi from './rumuspersegi';
import rumussegitiga from './rumussegitiga';


class Menu1 extends React.Component {
  static navigationOptions = {
    title: 'MENU RUMUS',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
       onPress={() => navigate('Menu2')}
        title="RUMUS LINGKARAN"
        />
        <Button
       onPress={() => navigate('Menu3')}
        title="RUMUS PERSEGI"
        />
        <Button
       onPress={() => navigate('Menu4')}
        title="RUMUS SEGITIGA"
        />
      </View>
      
    );
  }
}



class MainApp extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  redirect()
  {
  this.props.navigation.navigate('Menu1')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={styles.welcome}>NPM : 13.2014.1.00406</Text>
        <Text style={styles.welcome}>NAMA : Widdi Endila Depasa</Text>
        <Button
         onPress={() => navigate('Menu1')}
          title="MENU RUMUS"
        
        />
      </View>
    );
  }
}
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

const Bar = StackNavigator({
//const Bar = TabNavigator({
    
  Home: { screen: MainApp },
  Menu1: { screen: Menu1 },
  Menu2: { screen: rumuslingkaran },
  Menu3: { screen: rumuspersegi },
  Menu4: { screen: rumussegitiga },
  
});

AppRegistry.registerComponent('coba', () => Bar);
