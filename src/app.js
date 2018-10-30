import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './constants/configureStore';
import { saveNameSelectTab } from './actions/index.js';
const { store } = configureStore();
// import RoutingMainApplication from './routingMainApplication.js';
import RoutingMainApplication from './routingAuth.js';

import {Actions} from 'react-native-router-flux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onTabPress(scene) {
    let tabName = scene.scene.route.key;
    let tabNameStore = store.getState().data.tabNameAnimate;
    if(tabNameStore === tabName){
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
      Actions[tabName].call()
    }

    store.dispatch(saveNameSelectTab(tabName));
  }
  render(){
    const { channelNameFirstTab } = store.getState().data.dataSelectedSerialsFirstTab;
    return (
      <Provider store={store}>
        <RoutingMainApplication
          channelNameFirstTab={channelNameFirstTab}
          onTabPress = {this.onTabPress.bind(this)}
        />
      </Provider>
    )
  }
}

export default App;
