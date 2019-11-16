import React from 'react';
import {View ,Text, TouchableOpacity, ImageBackground ,Image} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class Home extends React.Component{
    render (){
       
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.backContainer}
                    source={require ('C:/FalTeller/src/assets/bg.jpg')}>
                
                <View style={styles.LogoContainer}>
                        <Image
                        source={require ('C:/FalTeller/src/assets/fortune.png')}
                        style={styles.Logo}/>
                </View>  

                <View style={styles.MainTitle}>
                    <Text style={styles.text}>FALTELLER</Text>
                </View>
                
                <View style={styles.Line}></View>                

                <View style={styles.mainButtonContainer}>
                    <TouchableOpacity style={styles.MainButton}
                    onPress={() => {
                            this.props.navigation.navigate ('FalTipi')           
                        }}>
                    <Text style={styles.text}>Fal Bakmaya Başla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MainButton}
                    onPress={() => {
                            this.props.navigation.navigate ('GecmisFal')           
                        }}>
                    <Text style={styles.text}>Geçmiş Fallar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.socialButtonContainer}>
                    <TouchableOpacity style={styles.LogoTwitter}
                    onPress={() => {
                            this.props.navigation.navigate ('firstpage')           
                        }}>
                    <Image
                        source={require ('C:/FalTeller/src/assets/twitter.png')}
                        style={styles.socialLogoimg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LogoInstagram}
                    onPress={() => {
                            this.props.navigation.navigate ('firstpage')           
                        }}>
                    <Image
                        source={require ('C:/FalTeller/src/assets/instagram.png')}
                        style={styles.socialLogoimg}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.starsContainer}>
                    <TouchableOpacity style={styles.LogoStars}
                    onPress={() => {
                            this.props.navigation.navigate ('firstpage')           
                        }}>
                    <Image
                        source={require ('C:/FalTeller/src/assets/stars.png')}
                        style={styles.socialLogoimg}/>
                    </TouchableOpacity>
                </View>


                
                </ImageBackground>
               
            </View >  
           

          );
    }
}
export default Home;



