import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ViewStyle, ImageStyle } from 'react-native';

interface IProps {
    style: ViewStyle,
    imageStyle: ImageStyle,
    onPress: any,
    disabled?: boolean,
    source: number
}

const ImageButton = (props: IProps) => {
    const { style, imageStyle, onPress, disabled, source } = props
    return (
        <TouchableOpacity
            style={style}
            onPress={onPress}
            disabled={disabled}
        >
            <Image
                source={source}
                style={imageStyle}
                resizeMode='contain'
            />
        </TouchableOpacity>
    );
}

export default ImageButton