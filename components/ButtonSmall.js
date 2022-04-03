import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const ButtonN = ({

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
export default ButtonN

const Styles = StyleSheet.create({
    container: {
        width: '85%',
        alignItems: 'center',
        height: 55,
    },
    button: {
        width: '20%',
        height: '50%',
        backgroundColor:  Colors.bg,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonInternal: {
        width: '100%',
        height: '100%',
        backgroundColor:  Colors.white,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        color: Colors.gray,
    }
});