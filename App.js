import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import HomeScreen from './Screens.js/HomeScreen'
import SummaryScreen from './Screens.js/SummaryScreen'


export default class App extends React.Component {

 
  render() {
    return (
      <View>
        <AppContainer/>
      
       </View>
    );
  }
}



var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
SummaryScreen:SummaryScreen
});
const AppContainer = createAppContainer(AppNavigator)
