import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface IProps {
}

export interface IState {
}

export default class SplashScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>SplashScreen Component</Text>
      </View>
    );
  }
}
