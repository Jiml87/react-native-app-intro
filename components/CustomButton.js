import React, { Component, PropTypes } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';
const style = {
    wraper: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 15 : 35,
        left: 0,
        right: 0,
        paddingHorizontal: 40,
    },
    textBtn: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '600',

    }
}
const CustomButton = (props) => (
    <View style={style.wraper}>
        <TouchableOpacity style={props.customButton} onPress={props.onDoneCustomClick}>
            <Text style={style.textBtn}>Got It</Text>
        </TouchableOpacity>
    </View>
)

export default CustomButton