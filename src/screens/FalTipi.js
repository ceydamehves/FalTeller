import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,Image} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class FalTipi extends React.Component {
    render (){
       
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backContainer}
                    source={require ('C:/FalTeller/src/assets/bg.jpg')}>
                </ImageBackground>

                <View>
                    <View style={styles.Title}>
                        <Text style={styles.titleText}>Fal Tipini Seç!</Text>
                    </View>
                            
                    <TouchableOpacity style={styles.FalButton}
                    onPress={() => {
                            this.props.navigation.navigate ('KahveFali')           
                    }}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/coffee.png')}
                        style={styles.FincanLogo}/>      
                        <Image
                        source={require ('C:/FalTeller/src/assets/kahve.png')}
                        style={styles.kahveText}/>                
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.cardButton}
                    onPress={() => {
                            this.props.navigation.navigate ('KartFali')           
                    }}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/card.png')}
                        style={styles.cardLogo}/>
                        <Image
                        source={require ('C:/FalTeller/src/assets/tarot.png')}
                        style={styles.cardText}/>  
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.FalButton}
                    onPress={() => {
                            this.props.navigation.navigate ('ElFali')           
                    }}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/hand.png')}
                        style={styles.FincanLogo}/>
                        <Image
                        source={require ('C:/FalTeller/src/assets/el.png')}
                        style={styles.elText}/>  
                    </TouchableOpacity>

                    <View style={styles.Bottom}>                    
                    <TouchableOpacity style={styles.bottomButton}
                    onPress={() => {
                            this.props.navigation.navigate ('Home')           
                    }}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/back.png')}
                        style={styles.bottomLogo}/></TouchableOpacity>
                    <TouchableOpacity style={styles.bottomButton}
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
            </View>
        )
};
}
export default FalTipi;