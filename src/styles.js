import {StyleSheet,Dimensions} from 'react-native';

export const headerStyles = StyleSheet.create({
    backContainer: {
        backgroundColor: 'rgba(80, 196, 199, 0.24)',
        position: 'absolute',
    
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 1,
    },
    MainButton:{
        marginTop: 30,
        alignItems:'center',
        backgroundColor: 'rgba(142, 113, 10, 0.30)',
        padding: 10,
        borderRadius: 40,
        
    },
    mainButtonContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize: 28,
        justifyContent:'center',
        alignItems:'center',
        color: '#593805',
        fontFamily: 'McLaren-Regular',
    },
    MainTitle:{
        marginLeft: Dimensions.get('window').width * 0.27,
        marginTop: 40,
        alignItems:'center',
        backgroundColor: 'rgba(142, 113, 10, 0.30)',
        padding: 10,
        borderRadius: 60,
        width: 180,
    },
    Line:{
        borderWidth: 2,
        width: Dimensions.get('window').width * 0.51,
        marginTop: 5,
        marginLeft: Dimensions.get('window').width * 0.24,
        borderColor:'rgba(89, 56, 5, 0.5)',
    },
    Logo:{
        marginTop: 22,
        padding: 20,
        alignItems:'center',
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        marginLeft: Dimensions.get('window').width * 0.069,
    },
    LogoContainer:{
        backgroundColor: 'rgba(142, 113, 10, 0.30)',
        marginLeft: Dimensions.get('window').width * 0.30,
        marginRight: Dimensions.get('window').width * 0.30,
        borderWidth: 3,
        borderRadius: 80,
        borderColor:'rgba(89, 56, 5, 0.7)',
        marginTop: 40,
        height: 150,
    },
    socialButtonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
       
    },
    socialLogoimg:{
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        alignSelf:'center',
        marginTop: Dimensions.get('window').width * 0.022,
    },
    LogoTwitter:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderRadius: 30,  
        backgroundColor: 'rgba(142, 113, 10, 0.30)'
    },
    LogoInstagram:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderRadius: 30,  
        backgroundColor: 'rgba(142, 113, 10, 0.30)'
    },
    LogoStars:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderRadius: 30,  
        backgroundColor: 'rgba(142, 113, 10, 0.30)'
    },
    starsContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: Dimensions.get('window').width * 0.387,
        
    },
    FalButton:{
        marginTop: 25,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.4,
        borderWidth: 3,
        borderRadius: 60,
        borderColor:'rgba(142, 113, 10, 0.30)',
        backgroundColor: 'rgba(142, 113, 10, 0.30)',
        
    },
    FincanLogo:{
        width: Dimensions.get('window').width * 0.30,
        height: Dimensions.get('window').width * 0.30,
        marginTop: 20,
        marginLeft: Dimensions.get('window').width * 0.02,
    },
    cardLogo:{
        width: Dimensions.get('window').width * 0.30,
        height: Dimensions.get('window').width * 0.30,
        marginTop: 20,
        marginLeft: Dimensions.get('window').width * 0.55, 
    },
    cardButton:{
        marginTop: 25,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.4,
        borderWidth: 3,
        borderRadius: 60,
        borderColor:'rgba(142, 113, 10, 0.30)',
        backgroundColor: 'rgba(142, 113, 10, 0.30)',
        marginLeft: Dimensions.get('window').width * 0.1,
    },
    Title:{
        marginTop: 10,
        alignItems:'center',
        backgroundColor: 'rgba(142, 113, 10, 0.30)',
        padding: 10,
        borderRadius: 40,
        height: Dimensions.get('window').width * 0.12,
        width: Dimensions.get('window').width * 0.5,
        marginLeft: Dimensions.get('window').width * 0.25,
        borderWidth: 3,
        borderRadius: 50,
        borderColor:'rgba(89, 56, 5, 0.7)',
    },
    titleText:{
        fontSize: 18,
        justifyContent:'center',
        alignItems:'center',
        color: '#593805',
        fontFamily: 'McLaren-Regular',
    },
    Bottom:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    bottomLogo:{
        marginTop:40,
        width: Dimensions.get('window').width * 0.14,
        height: Dimensions.get('window').width * 0.14,
        borderRadius: 10,  
        borderWidth: 3,
        borderColor:'rgba(89, 56, 5, 0.7)',
        backgroundColor:'rgba(142, 113, 10, 0.30)',
    },
    buttonText:{
        fontSize: 28,
        justifyContent:'center',
        alignItems:'center',
        color: '#593805',
        fontFamily: 'McLaren-Regular',
        marginLeft: Dimensions.get('window').width * 0.45,
        
    },
    FalciButton:{
        marginTop: 14,
        width: Dimensions.get('window').width * 0.65,
        height: Dimensions.get('window').width * 0.25,
        borderWidth: 3,
        borderRadius: 20,
        borderColor:'rgba(142, 113, 10, 0.30)',
        backgroundColor: 'rgba(142, 113, 10, 0.4)',
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    columnContainerEven: {
        marginLeft: -100,
      },
    columnContainerOdd: {
        marginLeft: 100,
      },
    falciLogo:{
        marginTop:Dimensions.get('window').width * 0.02,
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20,
    },
    falciRow:{
        flexDirection:'row',
    },
    textLogo:{
        marginLeft:Dimensions.get('window').width * 0.02,
        width: Dimensions.get('window').width * 0.40,
        height: Dimensions.get('window').width * 0.20,
    }
});

/*
<View style={styles.Bottom}>                    
<TouchableOpacity style={styles.bottomButton}
onPress={() => {
        this.props.navigation.navigate ('FalTipi')           
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
</View>*/