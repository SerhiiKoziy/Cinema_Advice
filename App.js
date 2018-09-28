import React, {Component} from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/constants/configureStore';
import { saveNameSelectTab } from './src/actions/index.js';

const { store } = configureStore();

import {View} from "react-native";
import RoutingMainApplication from './src/routingMainApplication.js';
//import RoutingAuth from './routingAuth.js';

import Actions from 'react-native-router-flux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      font: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'FontAwesome': require( './resources/fonts/FontAwesome.ttf'),
    });
    await this.setState({ font: true });
  }
  onTabPress(scene) {
    let tabName = scene.scene.route.key;
    let tabNameStore = store.getState().data.tabNameAnimate;
    if(tabNameStore === tabName){
      console.log('tabName', tabName)
      switch (tabName){
        case 'tab_1':
          Actions.popTo('home');
          break;
        case 'tab_2':
          Actions.popTo('channels');
          break;
        case 'tab_3':
          Actions.popTo('search');
          break;
        default: Actions.pop();
      }
    } else {
      console.log('tabName2222', tabName)
      Actions[tabName].call()
    }

    store.dispatch(saveNameSelectTab(tabName));
  }
  render(){
    const { channelNameFirstTab } = store.getState().data.dataSelectedSerialsFirstTab;
    console.log('this.state.font', this.state.font)
    return (
      <Provider store={store}>
        {
          this.state.font ? (
            <RoutingMainApplication
              channelNameFirstTab={channelNameFirstTab}
              // onTabPress = {this.onTabPress.bind(this)}
            />
          ) : (
            <View></View>
          )
        }

      </Provider>
    )
  }
}




