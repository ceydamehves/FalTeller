import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,Image,ScrollView} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class KahveFali extends React.Component {
    render (){
       
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backContainer}
                    source={require ('C:/FalTeller/src/assets/bg.jpg')}>
                </ImageBackground>
                <View style={styles.Title}>
                        <Text style={styles.titleText}>Falcı Seç!</Text>                        
                </View>

                <View style={[styles.columnContainer, styles.columnContainerEven]}>                  
                    <TouchableOpacity style={styles.FalciButton}
                    onPress={() => {
                            this.props.navigation.navigate ('Falcilar')           
                    }}>
                        <View style={styles.falciRow}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/man.png')}
                        style={styles.falciLogo}
                        /> 
                        <Image
                        source={require ('C:/FalTeller/src/assets/fatma.png')}
                        style={styles.textLogo}
                        /> 
                        </View>                     
                    </TouchableOpacity>
                </View>
                <View style={[styles.columnContainer, styles.columnContainerOdd]}>  
                    <TouchableOpacity style={styles.FalciButton}
                    onPress={() => {
                            this.props.navigation.navigate ('KartFali')           
                    }}>
                        <View style={styles.falciRow}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/fatma.png')}
                        style={styles.textLogo}
                        /> 
                        <Image
                        source={require ('C:/FalTeller/src/assets/girl.png')}
                        style={styles.falciLogo}
                        /> 
                        </View> 
                    </TouchableOpacity>
                </View>  
                <View style={[styles.columnContainer, styles.columnContainerEven]}>
                    <TouchableOpacity style={styles.FalciButton}
                    onPress={() => {
                            this.props.navigation.navigate ('ElFali')           
                    }}>
                        <View style={styles.falciRow}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/man.png')}
                        style={styles.falciLogo}
                        /> 
                        <Image
                        source={require ('C:/FalTeller/src/assets/fatma.png')}
                        style={styles.textLogo}
                        /> 
                        </View> 
                    </TouchableOpacity>
                    </View>
                
                <View style={[styles.columnContainer, styles.columnContainerOdd]}>                   
                    <TouchableOpacity style={styles.FalciButton}
                    onPress={() => {
                            this.props.navigation.navigate ('KahveFali')           
                    }}>
                        <View style={styles.falciRow}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/fatma.png')}
                        style={styles.textLogo}
                        /> 
                        <Image
                        source={require ('C:/FalTeller/src/assets/girl.png')}
                        style={styles.falciLogo}
                        /> 
                        </View>                       
                    </TouchableOpacity>
                </View>
                <View style={[styles.columnContainer, styles.columnContainerEven]}>
                    <TouchableOpacity style={styles.FalciButton}
                    onPress={() => {
                            this.props.navigation.navigate ('ElFali')           
                    }}>
                        <View style={styles.falciRow}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/man.png')}
                        style={styles.falciLogo}
                        /> 
                        <Image
                        source={require ('C:/FalTeller/src/assets/fatma.png')}
                        style={styles.textLogo}
                        /> 
                        </View> 
                    </TouchableOpacity>
                    </View>
                
                        
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
export default KahveFali;