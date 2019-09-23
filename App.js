import React from 'react'
import RootView from 'containers/RootView';
import MainNavigation from 'routers/MainNavigation';
import NavigationService from 'routers/NavigationService';

export default class App extends React.Component {

  render() {
    return (
      <RootView>
        <MainNavigation ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </RootView>
    );
  }
}