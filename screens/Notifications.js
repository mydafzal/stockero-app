import * as React from 'react';
import { View, Text } from 'react-native';

const Notifications=({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Notificaions" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Notifications Screen</Text>
        </View>
    );
}

export default Notifications;