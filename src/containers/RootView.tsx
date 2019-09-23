import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface IProps {
}

export interface IState {
}

export default class RootView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
          {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})