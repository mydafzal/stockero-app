import * as React from 'react';
import { View, Text, Image } from 'react-native';
import cat from '../assets/images/cat-white.png';

const Home=({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={cat}
                style={{ height: 152.97, width: 269 }}
            >

            </Image>
            <Text
                onPress={() => alert('This is the "Inbox" screen.')}
                style={{ fontSize: 16, fontFamily:'Poppins_400Regular', color:'#9A9A9A', justifyContent:'center', paddingTop: 20 }}>
                No messages yet!</Text>
        </View>
    );
}

export default Home;