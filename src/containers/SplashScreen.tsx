import * as React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import NavigationService from 'routers/NavigationService';
import SCREEN_NAME from 'lib/utils/screenName';
import strings from 'resources/strings';
import fonts from 'resources/fonts';
import sizes from 'resources/sizes';
import colors from 'resources/colors';

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
					<Text style={styles.welcomeText}>{strings.greeting}</Text>
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
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcomeText: {
		fontFamily: fonts.title,
		fontSize: sizes.title,
		color: colors.whiteColor,
		marginHorizontal: 30,
		textAlign: 'center'
	}
})