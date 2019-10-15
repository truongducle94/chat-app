import * as React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import NavigationService from 'routers/NavigationService';
import SCREEN_NAME from 'lib/utils/screenName';
import strings from 'resources/strings';

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
					<Text>{strings.greeting}</Text>
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