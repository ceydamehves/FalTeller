import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,Image} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class PayScreen extends React.Component {
    render (){
       
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backContainer}
                    source={require ('C:/FalTeller/src/assets/bg.jpg')}>
                    <Text>Ödeme Sayfası</Text>
                </ImageBackground>

                <View style={styles.Bottom}>                    
                <TouchableOpacity
                onPress={() => {
                        this.props.navigation.navigate ('FalTipi')           
                }}>
                    <Image
                    source={require ('C:/FalTeller/src/assets/back.png')}
                    style={styles.bottomLogo}/></TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                        this.props.navigation.navigate ('Home')           
                }}>
                    <Image
                    source={require ('C:/FalTeller/src/assets/home.png')}
                    style={styles.bottomLogo}/></TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                        this.props.navigation.navigate ('PayScreen')           
                }}>
                    <Image
                    source={require ('C:/FalTeller/src/assets/gift.png')}
                    style={styles.bottomLogo}/></TouchableOpacity>
                </View>
            </View>
        )
};
}
export default PayScreen;