import React, { PureComponent } from 'react';
import {Actions, Scene, Router, Tabs, Stack} from 'react-native-router-flux';

//react-native-router-fluximport Categories from './components/Categories.js';
import Home from './scene/Initial';
import Search from './scene/Search';
import Genres from './scene/Genres';
// import Episodes from './scene/Episodes';
// import ShowPage from './scene/ShowPage';
// import FilmDescription from './scene/FilmDescription';
// import VideoPlayer from './scene/VideoPlayer';
import CustomNavBar from './components/CustomNavBar.js';
import CustomNavBarSearch from './components/CustomNavBarSearch.js';
// import CustomNavBarSimple from './components/CustomNavBarSimple.js';
import TabComponent from './components/TabComponent.js';


import { TWO_STEEL, THREE_DENIM, BG_ACTIVE_COLOR_DESIGN, BG_COLOR_DESIGN } from "./constants/index.js";

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
      <Router>
        <Scene key="modal"  initial>
          <Stack
            key="root"
            initial
            titleStyle={{ alignSelf: 'center' }}
          >
            <Scene  hideNavBar type='replace' >
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
                      {/*key="film_description"*/}
                      {/*component={FilmDescription}*/}
                      {/*//navBar={CustomNavBarSimple}*/}
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
                {/*<Stack key="tab_4" iconName="" icon={TabComponent} duration={null}>*/}
                  {/*<Scene*/}
                    {/*key="search3"*/}
                    {/*component={Search}*/}
                    {/*title="Search"*/}
                    {/*navBar={CustomNavBarSearch}*/}
                  {/*/>*/}
                {/*</Stack>*/}
              </Tabs>
            </Scene>
          </Stack>
          {/*<Scene*/}
            {/*key="search4"*/}

            {/*component={Search}*/}
            {/*title="Search"*/}
            {/*navBar={CustomNavBarSearch}*/}
          {/*/>*/}
          {/*<Scene*/}
            {/*//navBar={CustomNavBarCategories}*/}
            {/*hideNavBar*/}
            {/*key="categories"*/}
            {/*component={Categories}*/}
            {/*title="Who are you?"*/}
            {/*initial*/}
            {/*direction="bottomToTop"*/}
          {/*/>*/}
        </Scene>
      </Router>
    )
  }
}

