import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const TouchableButton = ({

    containerStyle,
    buttonStyle,
    textStyle,
    title,
    //internalStyle,
    ...rest
}
) => {
    console.log(title)
    return (
        <View style={[Styles.container, containerStyle]}>
            <TouchableOpacity
                {...rest}
                style={[Styles.button, buttonStyle]}
            >
                <View styles={Styles.buttonInternal}>
                    <Text style={[Styles.buttonText, textStyle]}> {title} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default TouchableButton

const Styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        height: 55,
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor:  Colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonInternal: {
        width: '100%',
        height: '100%',
        backgroundColor:  Colors.primary,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        color: 'black',
    }
});