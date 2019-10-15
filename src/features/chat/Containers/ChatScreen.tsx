import * as React from 'react';
import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native';
import { chatDataType } from '../Types/types';
import DefaultHeader from 'components/Headers/DefaultHeader';
import images from 'resources/images';
import { width } from 'lib/configs/config';
import colors from 'resources/colors';
import sizes from 'resources/sizes';
import fonts from 'resources/fonts';

interface IProps {
}

interface IState {
    data: chatDataType[],
    text: string
}

export default class ChatScreen extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: [],
            text: ''
        };
    }

    renderItem = ({ item, index }: any) => {
        return (
            <Text>{item.message}</Text>
        )
    }

    public render() {
        return (
            <View style={styles.container}>
                <DefaultHeader
                    title='Chat'
                    iconLeft={images.ic_back}
                />
                <FlatList
                    data={this.state.data}
                    extraData={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
                <View style={styles.inputView}>
                    <TextInput
                        placeholder='Write'
                        value={this.state.text}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitMessage}
                        style={styles.inputStyle}
                    />
                </View>
            </View>
        );
    }

    onChangeText = (text: string) => {
        this.setState({ text })
    }

    onSubmitMessage = () => {
        this.setState((prev: IState) => {
            return {
                data: [...prev.data, { id: new Date().getTime(), user_receiver: 1, message: prev.text }]
            }
        })
    }

    keyExtractor = (item: chatDataType, index: number) => (item.id | index).toString()
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: colors.borderColor,
        borderWidth: 0.5,
        fontSize: sizes.content,
        fontFamily: fonts.title,
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 8
    },
    inputView: {
        width: width,
        flexDirection: 'row',
        padding: 10,
    }
})