import * as React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import NavigationService from 'routers/NavigationService';
import SCREEN_NAME from 'lib/utils/screenName';

interface IProps {
}

interface IState {
}

export default class SplashScreen extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}

	public render() {
		return (
			<TouchableWithoutFeedback onPress={this.onStartApp}>
				<View style={styles.container}>
					<Text>SplashScreen</Text>
				</View>
			</TouchableWithoutFeedback>

		);
	}

	onStartApp = () => {
		NavigationService.navigate(SCREEN_NAME.CHAT_SCREEN)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	}
})