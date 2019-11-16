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
        borderColor: '#8d8484',
        borderRadius: 30,  
        backgroundColor: 'rgba(142, 113, 10, 0.30)'
    },
    LogoInstagram:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderColor: '#8d8484',
        borderRadius: 30,  
        backgroundColor: 'rgba(142, 113, 10, 0.30)'
    },
    LogoStars:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.20,
        marginTop: 20,
        borderColor: '#8d8484',
        borderRadius: 30,  
        backgroundColor: 'rgba(142, 113, 10, 0.30)'
    },
    starsContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: Dimensions.get('window').width * 0.387,
        
    }
});