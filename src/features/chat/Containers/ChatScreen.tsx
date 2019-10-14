import * as React from 'react';
import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native';
import { chatDataType } from '../Types/types';

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
                <FlatList
                    data={this.state.data}
                    extraData={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
                <TextInput
                    placeholder='Write'
                    value={this.state.text}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitMessage}
                />
            </View>
        );
    }

    onChangeText = (text: string) => {
        this.setState({ text })
    }

    onSubmitMessage = () => {
        this.setState((prev: IState) => {
            return {
                data: [...prev.data, {id: new Date().getTime(), user_receiver: 1, message: prev.text}]
            }
        })
    }

    keyExtractor = (item: chatDataType, index: number) => (item.id | index).toString()
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})