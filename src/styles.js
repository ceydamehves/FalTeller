import {StyleSheet,Dimensions} from 'react-native';

export const headerStyles = StyleSheet.create({
    backContainer: {
        backgroundColor: 'rgba(80, 196, 199, 0.24)',
        position: 'absolute',
        
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 1,
    },
    MainButton:{
        marginTop: 20,
        alignItems:'center',
        backgroundColor: 'rgba(201,183,169,0.9)',
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
        marginTop: 30,
        alignItems:'center',
        backgroundColor: 'rgba(201,183,169,0.9)',
        padding: 10,
        borderRadius: 60,
        width: 180,
    },
    Line:{
        borderWidth: 2,
        width: Dimensions.get('window').width * 0.515,
        marginTop: 4,
        marginLeft: Dimensions.get('window').width * 0.24,
        borderColor:'rgba(89, 56, 5, 0.8)',
    },
    Logo:{
        marginTop: 22,
        padding: 20,
        alignItems:'center',
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        marginLeft: Dimensions.get('window').width * 0.07,
    },
    LogoContainer:{
        borderColor:'rgba(89, 56, 5, 0.8)',
        backgroundColor: 'rgba(201,183,169,0.9)',
        marginLeft: Dimensions.get('window').width * 0.29,
        marginRight: Dimensions.get('window').width * 0.30,
        borderWidth: 4,
        borderRadius: 60,
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
        backgroundColor: 'rgba(201,183,169,0.9)',
    },
    LogoInstagram:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderRadius: 30,  
        backgroundColor: 'rgba(201,183,169,0.9)',
    },
    LogoStars:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderRadius: 30,  
        backgroundColor: 'rgba(201,183,169,0.9)',
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
        borderColor:'rgba(89, 56, 5, 0.7)',
        backgroundColor: 'rgba(201,183,169,0.9)',
        flexDirection:'row'
        
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
        borderColor:'rgba(89, 56, 5, 0.7)',
        backgroundColor: 'rgba(201,183,169,0.9)',
        marginLeft: Dimensions.get('window').width * 0.1,
    },
    Title:{
        marginTop: 10,
        alignItems:'center',
        padding: 10,
        borderRadius: 40,
        height: Dimensions.get('window').width * 0.12,
        width: Dimensions.get('window').width * 0.5,
        marginLeft: Dimensions.get('window').width * 0.25,
        borderWidth: 3,
        borderRadius: 50,
        borderColor:'rgba(89, 56, 5, 0.7)',
        backgroundColor: 'rgba(201,183,169,0.6)',
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
        backgroundColor: 'rgba(201,183,169,0.6)',
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
        marginTop: 15,
        width: Dimensions.get('window').width * 0.65,
        height: Dimensions.get('window').width * 0.25,
        borderWidth: 3,
        borderRadius: 20,
        borderColor:'rgba(89, 56, 5, 0.7)',
        backgroundColor: 'rgba(201,183,169,0.9)',
        
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
    },
    kahveText:{
        marginTop:Dimensions.get('window').width * 0.09,
        marginLeft:Dimensions.get('window').width * 0.03,
        width: Dimensions.get('window').width * 0.50,
        height: Dimensions.get('window').width * 0.20,
    },
    cardText:{
        position:'absolute',
        top:40,
        width: Dimensions.get('window').width * 0.50,
        height: Dimensions.get('window').width * 0.20,
    },
    elText:{
        marginTop:Dimensions.get('window').width * 0.08,
        marginLeft:Dimensions.get('window').width * 0.03,
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