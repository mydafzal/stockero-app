import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Notifications = () => {
    const data = [
        {
            id: '2',
            name: 'Factory',
            notification: 'Responded to your offer',
            time: '10:00',
        },
        {
            id: '3',
            name: 'Leftover Shirts',
            notification: 'You won a bid',
            time: '10:01',
        },
    ]
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => {
                    return index.toString()

                }}
                renderItem={({ item }) => {
                    return
                    <Text>
                        {item.name}
                    </Text>
                    //                 <View style={styles.container}>
                    //                     <View style={styles.}>

                    // </View>
                    //                     </View>
                }}
            />
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({

    container: {
        paddingTop: 5,
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    header: {
        flex: 0.5,
        paddingLeft: 10,
    },
    Text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 25,
        color: '#fff'
    },
    box: {
        width: '40%',
        height: '20%',
        padding: 5,

    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',

    },

})