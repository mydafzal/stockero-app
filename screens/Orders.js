import * as React from 'react';
import { View, Text } from 'react-native';

const Orders=({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Orders" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Orders Screen</Text>
        </View>
    );
}

export default Orders;