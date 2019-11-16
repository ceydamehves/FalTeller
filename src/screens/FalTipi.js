import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class FalTipi extends React.Component {
    render (){
       
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backContainer}
                    source={require ('C:/FalTeller/src/assets/bg.jpg')}>
                    <Text>Fal Tipini Seç</Text>
                </ImageBackground>
            </View>
        )
};
}
export default FalTipi;