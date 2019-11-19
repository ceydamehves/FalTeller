import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class Falcilar extends React.Component {
    render (){
       
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backContainer}
                    source={require ('C:/FalTeller/src/assets/bg.jpg')}>
                    <Text>Falcılar</Text>
                </ImageBackground>
            </View>
        )
};
}
export default Falcilar;