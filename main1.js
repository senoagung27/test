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
import {
  Actions, Scene, Router, Switch, Modal
} from 'react-native-router-flux';
import About from './scenes/About';
import Question from './scenes/Question';

class TabIcon extends Component
{
  render(){
    const title = this.props.title;
    return (
    <Text>{title}</Text>
    );
  }
}
//ini adalah main project
class Main extends Component {

componentWillMount()
{
  this.Scene = Actions.create(
    <Scene key="root" tabs={true}>
<Scene key="question" component={Question} title="question" icon={TabIcon} hideNavBar={true}/>
<Scene key="about" component={About} title="about" icon={TabIcon} hideNavBar={true}/>
     </Scene> 
  )
}

  render() {
 return 
 <Router scenes={this.scenes}/>

  }
}

module.exports = Main;
