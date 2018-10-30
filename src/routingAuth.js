import React, { PureComponent } from 'react';

import startAuth from './routesAuth/StartAuth';
import SliderBuddy from './scene/Initial/MainCarousel';
import SignIn from './routesAuth/SignIn/SignIn';
import SignUp from './routesAuth/SignUp/SignUp';
import GrownUps from './routesAuth/GrownUps';
import ChooseProfile from './routesAuth/ChooseProfile';
import ProfileSettings from './routesAuth/ProfileSettings';

import CustomNavBarSignIn from './components/customNavBarAuth/CustomNavBarSignIn.js';
import CustomNavBarGrownUps from './components/customNavBarAuth/CustomNavBarGrownUps.js';
import CustomNavBarProfileSet from './components/customNavBarAuth/CustomNavBarProfileSet.js';

import Categories from './components/Categories.js';
import Home from './scene/Initial';
import Search from './scene/Search';
import Genres from './scene/Genres';
// import Episodes from './scene/Episodes';
// import ShowPage from './scene/ShowPage';
// import FilmDescription from './scene/FilmDescription';
//import VideoPlayer from './scene/VideoPlayer';
import CustomNavBar from './components/CustomNavBar.js';
import CustomNavBarSearch from './components/CustomNavBarSearch.js';
// import CustomNavBarSimple from './components/CustomNavBarSimple.js';
import CustomTabBar from './components/CustomTabBar.js';
// import CustomNavBarCategories from './components/CustomNavBarCategories.js';
import TabComponent from './components/TabComponent.js';

import {Actions, Scene, Router, Tabs, Stack} from 'react-native-router-flux';
import {THREE_DENIM, TWO_STEEL} from "./constants";

export default class RoutingMainApplication extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // onTabPress(scene) {
  //   let tabName = scene.scene.route.key;
  //   this.props.saveNameSelectTab(tabName);
  //   Actions[tabName].call()
  // }

  render() {
    return(
      <Router type='replace'>
          <Stack
            key="root"
            titleStyle={{ alignSelf: 'center' }}
          >
            <Stack titleStyle={{ alignSelf: 'center' }}>
              <Scene hideNavBar type='replace' panHandlers={null} >
                <Tabs
                    key="tabbar"
                    showLabel={false}
                    gestureEnabled={false}
                    swipeEnabled={false}
                    // tabBarOnPress={this.props.onTabPress}
                    activeBackgroundColor= {THREE_DENIM}
                    inactiveBackgroundColor= {TWO_STEEL}
                    //tabBarComponent={CustomTabBar}
                    duration={null}
                >
                  <Stack
                      key="tab_1"
                      iconName="home"
                      icon={TabComponent}
                  >
                      <Scene
                          key="home"
                          component={Home}
                          type='replace'
                          title={''}
                          navBar={CustomNavBar}
                      />
                    {/*<Scene*/}
                        {/*key="filmDescription"*/}
                        {/*component={FilmDescription}*/}
                        {/*navBar={CustomNavBarSimple}*/}
                        {/*title='filmDescription'*/}
                        {/*type='replace'*/}
                    {/*/>*/}
                      {/*<Scene*/}
                      {/*key="episodes_1"*/}
                      {/*navBar={CustomNavBarSimple}*/}
                      {/*component={Episodes}*/}
                      {/*title={this.props.channelNameFirstTab || 'Episodes'}*/}
                      {/*/>*/}
                      {/*<Scene*/}
                      {/*key="showPage_1"*/}
                      {/*navBar={CustomNavBarSimple}*/}
                      {/*component={ShowPage}*/}
                      {/*title='ShowPage'*/}
                      {/*/>*/}
                      {/*<Scene*/}
                      {/*key="videoPlayer_1"*/}
                      {/*gestureEnabled={false}*/}
                      {/*swipeEnabled={false}*/}
                      {/*hideTabBar*/}
                      {/*hideNavBar*/}
                      {/*component={VideoPlayer}*/}
                      {/*title='VideoPlayer'*/}
                      {/*/>*/}
                  </Stack>
                    <Stack key="tab_2" iconName="bars" icon={TabComponent} duration={null}>
                        <Scene
                            key="genres"
                            component={Genres}
                            //title='Channels'
                            navBar={CustomNavBar}
                        />
                    </Stack>
                    <Stack key="tab_3" iconName="search" icon={TabComponent} duration={null}>
                        <Scene
                            key="search2"
                            component={Search}
                            title="Search"
                            navBar={CustomNavBarSearch}
                        />
                    </Stack>
                  {/*<Stack key="tab_2" icon={TabComponent} duration={null}>*/}
                    {/*<Scene*/}
                        {/*key="channels"*/}
                        {/*component={Channels}*/}
                        {/*title='Channels'*/}
                        {/*navBar={CustomNavBar}*/}
                    {/*/>*/}
                    {/*<Scene key="episodes_2" navBar={CustomNavBarSimple} component={Episodes} title="Episodes"/>*/}
                    {/*<Scene key="showPage_2" navBar={CustomNavBarSimple} component={ShowPage} title='ShowPage'/>*/}
                    {/*/!*<Scene key="videoPlayer_2"  hideTabBar hideNavBar component={VideoPlayer} title='VideoPlayer'/>*!/*/}
                  {/*</Stack>*/}

                  {/*<Stack key="tab_3" icon={TabComponent} duration={null}>*/}
                    {/*<Scene*/}
                        {/*key="search"*/}
                        {/*component={Search}*/}
                        {/*title="Search"*/}
                        {/*navBar={CustomNavBarSearch}*/}
                    {/*/>*/}
                  {/*</Stack>*/}
                </Tabs>
              </Scene>
            </Stack>
            <Scene key="modal" modal>

              <Scene
                hideNavBar
                key="categories"
                component={Categories}
                title="Who are you?"
                direction="bottomToTop"
              />
              <Scene
                hideNavBar
                hideTabBar
                key="sliderBuddy"
                component={SliderBuddy}
              />
            </Scene>
            <Scene hideNavBar type='replace' initial panHandlers={null} >
              <Tabs
                key="tabbar2"
                showLabel={false}
                gestureEnabled={false}
                swipeEnabled={false}
                tabBarOnPress={this.props.onTabPress}
                tabBarComponent={CustomTabBar}
                duration={null}
              >
                <Stack
                  key="tab_2_1"
                  icon={TabComponent}
                >
                  <Scene
                    key="startAuth"
                    component={startAuth}
                    type='replace'
                    hideTabBar
                    hideNavBar
                    title={''}
                  />
                  <Scene
                    key="signIn"
                    component={SignIn}
                    type='replace'
                    hideTabBar
                    hideNavBar
                    //navBar={CustomNavBarSignIn}
                    title={''}
                  />
                  <Scene
                    key="signUp"
                    component={SignUp}
                    type='replace'
                    hideTabBar
                    hideNavBar
                    title={''}
                  />
                  <Scene
                    key="grownUps"
                    component={GrownUps}
                    type='replace'
                    hideTabBar
                    title={''}
                    navBar={CustomNavBarGrownUps}
                  />
                  <Scene
                    key="chooseProfile"
                    component={ChooseProfile}
                    type='replace'
                    hideTabBar
                    title={''}
                    navBar={CustomNavBarSignIn}
                  />
                  <Scene
                    key="profileSettings"
                    component={ProfileSettings}
                    type='replace'
                    hideTabBar
                    title={''}
                    navBar={CustomNavBarProfileSet}
                  />

                </Stack>
              </Tabs>
            </Scene>
          </Stack>
      </Router>
    )
  }
}

