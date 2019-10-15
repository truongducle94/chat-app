import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { width, platformOS } from 'lib/configs/config';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from 'resources/colors';
import ImageButton from 'components/Buttons/ImageButton';
import buttonStyle from 'styles/buttonStyle';
import fonts from 'resources/fonts';
import sizes from 'resources/sizes';

interface IProps {
    iconLeft?: number,
    iconRight?: number,
    title: string,
    onPressLeftButton?: () => any,
    onPressRightButton?: () => any
}

interface IState {
}

const header_height = 50
const HEADER_HEIGHT = platformOS == 'android' ? header_height : header_height - 6

export default class DefaultHeader extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        };
    }

    renderLeftIcon = () => {
        const { iconLeft, onPressLeftButton } = this.props
        if (iconLeft) {
            return (
                <ImageButton
                    source={iconLeft}
                    style={buttonStyle.iconButtonStyle}
                    imageStyle={buttonStyle.iconStyle}
                    onPress={onPressLeftButton}
                />
            )
        } else {
            return <View style={styles.buttonStyle} />
        }
    }

    renderRightIcon = () => {
        const { iconRight, onPressRightButton } = this.props
        if (iconRight) {
            return (
                <ImageButton
                    source={iconRight}
                    style={buttonStyle.iconButtonStyle}
                    imageStyle={buttonStyle.iconStyle}
                    onPress={onPressRightButton}
                />
            )
        } else {
            return <View style={styles.buttonStyle} />
        }
    }

    public render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#006BCA'
                    barStyle='light-content'
                />
                <View style={styles.contentView}>
                    {this.renderLeftIcon()}
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    {this.renderRightIcon()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: HEADER_HEIGHT,
        marginTop: platformOS == 'ios' ? getStatusBarHeight() : 0,
        backgroundColor: colors.primaryColor
    },
    contentView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        width: 50,
        height: 50
    },
    titleStyle: {
        fontFamily: fonts.title,
        fontSize: sizes.header,
        color: colors.whiteColor
    }
})