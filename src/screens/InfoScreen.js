import React from 'react';
import {View,ImageBackground,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import {headerStyles as styles} from 'C:/FalTeller/src/styles.js';

class InfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    render (){
       
        return(
        <View style={{flex:1}}>
            <ImageBackground
                style={styles.backContainer}
                source={require ('C:/FalTeller/src/assets/bg.jpg')}>
            </ImageBackground>
        
        <Text style={styles.text}>Adınız</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Bilgilerinizi Giriniz"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && ':)').join(' ')}
        </Text>
        
        <Text style={styles.text}>Yaşınız</Text>
        <TextInput 
          style={{height: 40}}
          placeholder="Bilgilerinizi Giriniz"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && ':)').join(' ')}
        </Text>

        <Text style={styles.text}>İlişki durumunuz</Text>
        <TextInput 
          style={{height: 40}}
          placeholder="Bilgilerinizi Giriniz"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && ':)').join(' ')}
        </Text>

        <Text style={styles.text}>blaaaaaaa</Text>
        <TextInput 
          style={{height: 40}}
          placeholder="Bilgilerinizi Giriniz"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && ':)').join(' ')}
        </Text>

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
        )
};
}
export default InfoScreen;


